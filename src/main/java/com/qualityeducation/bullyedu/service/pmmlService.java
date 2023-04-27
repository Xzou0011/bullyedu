package com.qualityeducation.bullyedu.service;

import org.dmg.pmml.FieldName;
import org.jpmml.evaluator.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import javax.xml.bind.JAXBException;
import java.io.File;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class pmmlService {

    @Autowired
    ResourceLoader resourceLoader;

    public int search(String keyword) throws JAXBException, IOException, SAXException {
        Resource resource = resourceLoader.getResource("classpath:demo2.pmml" );
        File file = resource.getFile();

        Evaluator evaluator = new LoadingModelEvaluatorBuilder()
                .load(file)
                .build();
        evaluator.verify();
        List<InputField> inputFields = evaluator.getInputFields();
        List<TargetField> targetFields = evaluator.getTargetFields();
        Map<FieldName, FieldValue> arguments = new LinkedHashMap<>();
        arguments.put(inputFields.get(0).getName(), inputFields.get(0).prepare(keyword));
        System.out.println(arguments);

        Map<FieldName, ?> results = evaluator.evaluate(arguments);

        TargetField targetField0 = targetFields.get(0);
        FieldName targetFieldName = targetField0.getName();
        Object targetFieldValue = results.get(targetFieldName);

        int primitiveValue = 6;
        if (targetFieldValue instanceof Computable computable) {
            primitiveValue = (Integer)computable.getResult();
        }

        System.out.println("Predicted value" + primitiveValue);
        return primitiveValue;
    }
}
