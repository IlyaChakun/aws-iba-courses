#How to set up ECS + ECR + ALB + WAF and test via k6

!NOTE: for this you need docker to be installed on your machine!

First we can create ECR repository
![img.png](assets/repository_creation.png)

Then we can see push commands to build and push our image:
![img_1.png](assets/push_commands.png)

Once its done, we may see our image in ECR:
![img_2.png](assets/ecr_image.png)

Now lets navigate to ECS and create cluster

!NOTE: here we will use default vpc!

![img_3.png](assets/cluster_creation_start.png)

Next we should create a task definition:
![img.png](assets/task_definition_creation_name.png)
![img_17.png](assets/task_definition_creation.png)
As image URI use tha URI from ECR with tag (latest is for the latest version)

Next configure env for fargate:
![img_5.png](assets/fargate_config.png)

Rest of configurations may be left as they are
![img_6.png](assets/task_definition_created.png)
!NOTE: here we have a second revision, but you will have the first one!


Now lets work with our security groups
This one represents security group for our loadbalancer
![img_19.png](assets/alb_security_gr.png)
And this one accepts traffic from alb and passes to ECS on 8080
![img_20.png](assets/service_security_group.png)

Next navigate to cluster and create service to run our fargate:
![img_10.png](assets/serivce_creation_env.png)
![img_12.png](assets/service_creation_deployment.png)

In network choose our security group:
![img_22.png](assets/service_creation_network.png)

And create Load balancer right here:
![img_16.png](assets/service_creation_alb.png)
And after a few minutes we can see our service and our task in Running status in cluster console:
![img_14.png](assets/service_running.png)
![img_15.png](assets/task_running.png)



In alb console add our security group:
![img_21.png](assets/alb_sg_added.png)

Than pass our loadbalancer dns in url with our request uri and thats it:
![img_23.png](assets/alb_works.png)

Now lets create WAF as before and name it ecs-alb-waf:
![img_24.png](assets/waf_name.png)

But this time lets block everything that not ends with "test"
![img_25.png](assets/waf_rule.png)

And now we have HTTP 403 which is default WAF code:
![img_26.png](assets/waf_works.png)

Even in case that we dont have such endpoint:
![img_27.png](assets/waf_works_2.png)
![img_28.png](assets/waf_works_3.png)

As well we can add ip set

First, lets get our ip [here](https://ip4.me)

Then lets create set itself, using mask 32, because its our just our single ip:
![img.png](assets/ip_Set_creation.png)
Next go to our waf and add new rule:
![img_1.png](assets/ip_Set_rule.png)
Lets enable custom response as a text as well to be sure that it works:
![img_2.png](assets/ip_set_responce.png)

And now try ro connect again and we will see this:
![img_3.png](assets/ip_set_check.png)

Now lets test it via [k6](../../k6/K6.md):

This is with the correct url that not blocked with WAF:
![img_29.png](assets/k6_good_scenario.png)

Now lets create wrong URL:
![img_30.png](assets/k6_url.png)

And thats will be our output:
![img_31.png](assets/k6_bad_scenario.png)

As well as our log insights:
![img_33.png](assets/log_insights.png)

But! To protect us from some DOS/DDOS we also can add rate-based rules:
![img_4.png](assets/rate-based-rule.png)
Now lets run our k6 again

While its running we may check our log insights(clientIp here is the ip of our instance with k6):
![img_5.png](assets/log_insights_allow.png)
As we can see everything is ok, but lets wait a bit more and add filter for blocked requests:
![img_6.png](assets/log_insights_block.png)
```
fields @timestamp, @message, action, nonTerminatingMatchingRules.0.action, ruleGroupList.0.terminatingRule.ruleId, terminatingRuleId, httpRequest.clientIp, httpRequest.uri
| filter action = "BLOCK"
| filter httpRequest.clientIp = "K6_IP"
```

So now our k6 finished and we may check the results:
![img_7.png](assets/k6_rate_results.png)
As we can see only 11% of our requests was 200, the rest of them were blocked by our rate rule

But! now lets add ip-set with our k6 instance ip as allowed rule and put it as first for our waf:
![img.png](assets/allow_ip.png)
And run our k6:
![img_1.png](assets/k6_succsecscs.png)
Now its allowed because our rule is in higher priority and its allows our traffic from k6

But if you will put our ip rule lower than the rate one, then... try it yourself!