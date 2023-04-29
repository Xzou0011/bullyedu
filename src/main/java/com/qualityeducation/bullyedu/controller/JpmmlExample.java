package com.qualityeducation.bullyedu.controller;

import org.jpmml.evaluator.*;
import org.xml.sax.SAXException;
import javax.xml.bind.JAXBException;
import java.io.*;
import java.util.List;

import org.dmg.pmml.FieldName;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

public class JpmmlExample {

    public static void main(String[] args) throws IOException, SAXException, JAXBException {
        Evaluator evaluator = new LoadingModelEvaluatorBuilder()
                .load(new File("/Users/zouxin/Desktop/copy/src/main/resources/demo2.pmml"))
                .build();
        evaluator.verify();
        List<InputField> inputFields = evaluator.getInputFields();
        List<TargetField> targetFields = evaluator.getTargetFields();

        Map<FieldName, FieldValue> arguments = new LinkedHashMap<>();
        Object rawValue = "something";
        arguments.put(inputFields.get(0).getName(), inputFields.get(0).prepare(rawValue));
        Map<FieldName, ?> results = evaluator.evaluate(arguments);

        TargetField targetField0 = targetFields.get(0);
        FieldName targetFieldName = targetField0.getName();
        Object targetFieldValue = results.get(targetFieldName);
        System.out.println("targetFieldValue = " + targetFieldValue);

        int primitiveValue = 0;
        if (targetFieldValue instanceof Computable computable) {
            primitiveValue = (Integer)computable.getResult();
        }

        System.out.println("Predicted value" + primitiveValue);
    }
}
