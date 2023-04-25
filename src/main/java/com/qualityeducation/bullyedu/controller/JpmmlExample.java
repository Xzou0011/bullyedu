package com.qualityeducation.bullyedu.controller;

import org.jpmml.evaluator.*;
import org.xml.sax.SAXException;
import javax.xml.bind.JAXBException;
import javax.xml.parsers.ParserConfigurationException;
import java.io.*;
import java.util.List;

import org.dmg.pmml.FieldName;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

public class JpmmlExample {

    public static void main(String[] args) throws IOException, SAXException, ParserConfigurationException, JAXBException {
//        PMML pmml = new PMML();
//        InputStream is = new FileInputStream("/Users/zouxin/Desktop/untitled/src/main/resources/demo2.pmml");
//        PMML pmml = org.jpmml.model.PMMLUtil.unmarshal(is);
//        ModelEvaluatorFactory modelEvaluatorFactory = ModelEvaluatorFactory.newInstance();
//        Evaluator evaluator = modelEvaluatorFactory.newModelEvaluator(pmml);
//        pmml = null;
        Evaluator evaluator = new LoadingModelEvaluatorBuilder()
                .load(new File("/Users/zouxin/Desktop/copy/src/main/resources/demo2.pmml"))
                .build();
        evaluator.verify();
        List<InputField> inputFields = evaluator.getInputFields();
        System.out.println("Input fields: " + inputFields);
//        ModelEvaluator<?> modelEvaluator = modelEvaluatorFactory.newModelEvaluator(pmml);
        List<TargetField> targetFields = evaluator.getTargetFields();
        System.out.println("Target field(s): " + targetFields);
        List<OutputField> outputFields = evaluator.getOutputFields();
        System.out.println("Output fields: " + outputFields);

        String result = "some";
//        Map<String, ?> results = evaluator.evaluate(arguments);
        // Use the model evaluator to make predictions
//        Evaluator evaluator = (Evaluator) modelEvaluator;
//        List<InputField> inputFields = evaluator.getInputFields();
        Map<FieldName, FieldValue> arguments = new LinkedHashMap<>();
        arguments.put(inputFields.get(0).getName(), inputFields.get(0).prepare("fucking hell you are a big slut")); // set the value of the input field
        Map<FieldName, ?> results = evaluator.evaluate(arguments);
//        List<TargetField> targetFields = evaluator.getTargetFields();

        TargetField targetField0 = targetFields.get(0);
        FieldName targetFieldName = targetField0.getName();

        Object targetFieldValue = results.get(targetFieldName);

        for (TargetField targetField : targetFields) {
            FieldName targetName = targetField.getName();
            Object targetValue = results.get(targetName);
            System.out.println("Predicted value for target " + targetName.getValue() + ": " + targetValue);
        }

        int primitiveValue = -1;
        if (targetFieldValue instanceof Computable) {
            Computable computable = (Computable) targetFieldValue;
            primitiveValue = (Integer)computable.getResult();
        }
        System.out.println("Predicted value" + primitiveValue);
    }
}
