package iba.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api/v1/test")
public class SimpleController {

    @GetMapping()
    public String getSimpleResponse(){
        return "Good job!";
    }
}
