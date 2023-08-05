package test.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controllerv3 {

    @GetMapping("/service/account-service/health")
    public String health() {
        return "good";
    }

}
