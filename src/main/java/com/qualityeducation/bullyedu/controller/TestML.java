package com.qualityeducation.bullyedu.controller;

import org.dmg.pmml.FieldName;
import org.jpmml.evaluator.*;
import org.xml.sax.SAXException;

import javax.xml.bind.JAXBException;
import java.io.File;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class TestML {
    public static void main(String[] args) throws IOException, SAXException, JAXBException {
        Evaluator evaluator = new LoadingModelEvaluatorBuilder()
                .load(new File("/Users/zouxin/Desktop/copy/src/main/resources/lsvr_tox.pmml"))
                .build();
        evaluator.verify();
        List<InputField> inputFields = evaluator.getInputFields();
        List<TargetField> targetFields = evaluator.getTargetFields();

        Map<FieldName, FieldValue> arguments = new LinkedHashMap<>();
        Object rawValue = "i am so happy today";
        arguments.put(inputFields.get(0).getName(), inputFields.get(0).prepare(rawValue));
        Map<FieldName, ?> results = evaluator.evaluate(arguments);
        System.out.println(results);

        TargetField targetField0 = targetFields.get(0);
        System.out.println("targetField0 = " + targetField0);
        FieldName targetFieldName = targetField0.getName();
        System.out.println("targetFieldName = " + targetFieldName);
        Object targetFieldValue = results.get(targetFieldName);
        System.out.println("targetFieldValue = " + targetFieldValue);

        Object primitiveValue = 0;
//        Computable computable = (Computable)targetFieldValue;
//        primitiveValue = computable.getResult();
        if (targetFieldValue instanceof HasProbability hasProbability) {
            System.out.println("yes");
        }

        if (targetFieldValue instanceof Computable computable) {
            primitiveValue = (Integer)computable.getResult();
        }

        System.out.println("Predicted value" + primitiveValue);
    }

}
