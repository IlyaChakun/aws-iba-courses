package test.app;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

@RestController
@RequestMapping("/second-service")
public class ControllerV2 {

    private static final ObjectMapper mapper = new ObjectMapper();



    @GetMapping("/test-get")
    public String testGet() {
        return "Get works!";
    }

    @GetMapping("/test-get-external-service")
    public String testGetExternal() throws IOException {
        return "proxy external + " + makeRequest("https://uat-external.ddosrebuff.com/service/test-get");
    }

    @GetMapping("/test-get-internal-service")
    public String testGetInternal() throws IOException {
        return "proxy internal+ " + makeRequest("https://uat-internal.ddosrebuff.com/service/test-get");
    }

    @PostMapping("/test-post")
    public String testPost(@RequestBody TestReq testReq) {
        System.out.println(testReq);
        return testReq.toString();
    }

    private String makeRequest(String url) throws IOException {
        URL yahoo = new URL(url);
        URLConnection yc = yahoo.openConnection();
        BufferedReader in = new BufferedReader(
                new InputStreamReader(
                        yc.getInputStream()));
        String inputLine;
        StringBuilder response = new StringBuilder();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        return response.toString();
    }
}
