First we need to create instance itself and rub a simple lets say java application on it:

For this first, build our jar file and then just copy it to our instance:
```
scp -i ./DemoKeyPair.pem . <username>@<public-ip or DNS>:/pathwhere/you/needto/copy
```

![img_1.png](assets/ec2_copy.png)
![img_2.png](assets/ec2_check_copied.png)

Next we need Java on our instance, for that we can run

```
java -version
```

And see all the variatons of commands to run to install it
![img_3.png](assets/ec2_java_upd.png)

I chose this one:
```
sudo apt install openjdk-11-jre-headless
```

And we will see this after installation and checking version again:
![img_4.png](assets/ec2_java_version.png)

Now lets run our app:
```
java -jar test-cicd.app
```
![img_5.png](assets/spring_run.png)


And now we may connect t it and check if it works:
![img_6.png](assets/checkby_ip.png)

!NOTE:
Enable port 8080 in our security group:
![img_7.png](assets/security_group.png)



Now lets create application load balancer:

![img_8.png](assets/alb_start.png)

![img_9.png](assets/alb_config.png)

When creating target group put in a health check path to our endpoint
![img_10.png](assets/alb_target_group.png)

And register our target:
![img_13.png](assets/alb_tg_registration.png)
![img_14.png](assets/alb_tg_registred.png)

Now we can access to our endpoint through DNS of our loadbalancer:
![img_16.png](assets/alb_dns_find.png)
![img_15.png](assets/alb_dns_check.png)


Now lets create our WAF and connect it to our ALB.

##WAF creation

![img_17.png](assets/waf_creation_details.png)

And add our own rue that will block anything with "block-me" in url

![img_18.png](assets/waf_rules.png)

And just to be sure we will add custom responce 421:
![img_19.png](assets/waf_action.png)

Other configurations may be left as they are

To check logs we need to enable logging in waf and create log group with 'aws-waf-logs' prefix
![img_26.png](assets/logging_enable.png)
![img_23.png](assets/log_gro_creation.png)
![img_24.png](assets/logging_destination.png)

And now when we add our string to our url we will get this:

![img_20.png](assets/waf_check.png)
![img_21.png](assets/waf_check_2.png)


##Add K6 to our app


How to install k6 on our instance and run it you can find [here](../../k6/K6.md)

To check it on our app just paste our URL to that req1.js file

![img_22.png](assets/k6_check.png)

Now we may check our insights in previously created log group on insights tab:
![img_25.png](assets/k6_insights.png)