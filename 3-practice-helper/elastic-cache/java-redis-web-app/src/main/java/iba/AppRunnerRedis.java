package iba;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "iba")
public class AppRunnerRedis {

    public static void main(String[] args) {
        SpringApplication.run(AppRunnerRedis.class, args);
    }

}