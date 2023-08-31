#### Load testing & K6 & artillery

Test load testing using K6 and 2 ec2 instances

1. create an ec2 instance, put there 1 spin boot endpoint application that will return a string response, + write a log
   sout Instance for adjustment
   Endpoint must create a pathVariable in itself
   users/{slovo} and in the code you have to write that word this will allow you to see that k6 takes different paths
2. create an instance for Testing run a simple k6 script on it
   Take the instructions that he threw and upload 2 files to the server with k6: the script itself + file with urls
   Run the script (you can also copy k6 logs which it will write to a nearby file)

#### WAF & ALB

* Create a simple 1 rest endpoint application and deploy it with EC2 using ALB and target group.

* Create WAF and try to add a Limit rule and manage rules: AWSManagedRulesAmazonIpReputationList
  AWSManagedRulesKnownBadInputsRuleSet

* Attach WAF to the ALB

* Test it via ec2 instance with k6 script from previous step. See if the requests will be blocked

* Show statistics via cloudwatch insight. (waf should stream data for analysis there).
* Find all blocked requests count
* Take an ip address of your ec2 with k6 and find count of request from this IP address
* Override limit rule to COUNT and reproduce test.
* Create a ipSet with ip address of your k6 instance
* Create an IP set rule to allow all calls from this IP address and put it first in a list of rules.
* Test it one more time and see if your requests would be blocked by Rating rule (rule must be in BLOCK mode)

All count request

```
fields @timestamp, @message, action, nonTerminatingMatchingRules.0.action, ruleGroupList.0.terminatingRule.ruleId, terminatingRuleId, httpRequest.clientIp, httpRequest.uri
| filter nonTerminatingMatchingRules.0.action = "COUNT"
```

All blocked requests with uri

```
fields @timestamp, @message, action, nonTerminatingMatchingRules.0.action, ruleGroupList.0.terminatingRule.ruleId, terminatingRuleId, httpRequest.clientIp, httpRequest.uri
| filter action = "BLOCK"
| filter httpRequest.uri = "/"
| stats count(*)
```

#### Cloudfront & WAF

* Add Cloudfront distribution for your ec2 app from prev step
* Attach precious WAF to the cloudfront*
* Point Cloudfront to the ALB

* Test your setup with k6 and with hands
* Describe why it better than previous step

#### ECS + ECR + ALB + **WAF** + ROUTE53

* Take a cloudformation from the ECS step.
* Create deployment based on java single endpoint app with url with PATH variable.
* Create a WAF manually and attach it to ALB.
* (Add aws managed rules:
* AWSManagedRulesAmazonIpReputationList & AWSManagedRulesKnownBadInputsRuleSet)
* (Create custom rule to block all request that contains word block in url)
* (Create a custom rule to allow all request that contains word allow in url)
* Create Route53 alias for ALB.
* Test that it works and waf block/allow works properly

* Add waf to your cloudformation with these 4 rules.
* Delete your manually created waf.
* Redeploy your template and see if you have the same waf.
* Test it again.

#### Create cloudformation template for waf ACL

* Create waf via cloudformation with 2 aws managed groups for your choice.
* Add 1 Custom Limit rule for 2000 reqs per 5 minute
* Add 1 Custom rule to block based on header or rule (on your choice)
* Deploy it and test via ALB + ec2 simple setup
*

##### Questions:

* What is the requesterPay feature?
* What is an event notification feature?
* What is aws s3 endpoint?
* How can we use pre signed urls?
* What is the difference between lifecycle rules?
* Read about CDN.

* Read theory about AWS Shield
* Shield vs Shield Advanced
* Theory about ddos attacks & protection (layers 4 & 7)
* Which services have basic protection offered by aws ?
* What is security on the edge?
* What is CLA?
* Which types of load testing do you know?
