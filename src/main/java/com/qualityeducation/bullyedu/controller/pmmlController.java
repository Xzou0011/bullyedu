package com.qualityeducation.bullyedu.controller;

import com.qualityeducation.bullyedu.service.pmmlService;
import org.dmg.pmml.FieldName;
import org.jpmml.evaluator.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.xml.sax.SAXException;

import javax.xml.bind.JAXBException;
import java.io.File;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Controller
public class pmmlController {

//    @GetMapping("emotional")
//    public String greetingForm() {
//        return "emotional";
//    }
    @Autowired
    private pmmlService service;

    @GetMapping("/emotional")
    public String inti() {
        return "emotional";
    }

    @PostMapping ("/search")
    public String search(@RequestParam(name = "inputString",required = false) String inputString, Model model) throws JAXBException, IOException, SAXException {
        int primitiveValue = service.search(inputString);
        model.addAttribute("result", primitiveValue);
        return "emotional";

//        List<Math> mathList = service.search(keyword);
//        model.addAttribute("mathList", mathList);
//        return "math";
    }

//    @PostMapping ("/searchAll")
//    public String searchAll(@RequestParam(name = "inputString",required = false) String inputString, Model model) throws JAXBException, IOException, SAXException {
//        int atk = service.searchAtk(inputString);
//        int agg = service.searchAgg(inputString);
//        int tox = service.searchTox(inputString);
//        model.addAttribute("result1", atk);
//        model.addAttribute("result2", agg);
//        model.addAttribute("result3", tox);
//        return "emotional";
//    }

//    @PostMapping ("/searchAgg")
//    public String searchAgg(@RequestParam(name = "inputString",required = false) String inputString, Model model) throws JAXBException, IOException, SAXException {
//        int primitiveValue = service.searchAgg(inputString);
//        model.addAttribute("result2", primitiveValue);
//        return "emotional";
//    }
//
//    @PostMapping ("/searchTox")
//    public String searchTox(@RequestParam(name = "inputString",required = false) String inputString, Model model) throws JAXBException, IOException, SAXException {
//        int primitiveValue = service.searchTox(inputString);
//        model.addAttribute("result3", primitiveValue);
//        return "emotional";
//    }


}
