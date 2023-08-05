# S3 + CloudFront

So, first lets create our S3 bucket:
![img_2.png](assets/bucket_creation.png)
![img_1.png](assets/bucket_versioning.png)

And lets upload here files for our site from [site-resources](../site-sources) package

![img_3.png](assets/upload_resources.png)

Next go to CloudFront console

Here we have to create a new distribution:
![img_4.png](assets/distribution_creation.png)
So, we chose our bucket in origin domain and asks CloudFront to create policies needed to access it

For this project other settings can be just default, but we can specify the ***default root object*** which wll be returned if we request the root url


And now we have to wait a few minutes until it will be deployed
![img_5.png](assets/deployed.png)

Once it is done we can go back to our Bucket and check bucket policy in permissions,
which gives cloudfront a getObject permission:
![img_6.png](assets/bucket_policy_updated.png)
Here we see the id of our CloudFront distribution

And now all we have to do is just put our cloudfront domain and path to file and thats it
![img_8.png](assets/cloudfront_dns.png)
![img_7.png](assets/cloudfront_check.png)


# S3 + CloudFront + WAF

Lets start from creating WAF:
![img_15.png](assets/waf_creeation.png)

NOTE: if you change region it will reload the page!

Now let's add custom rule that will block any request with 'block-me' in url
![img_16.png](assets/rule_creation.png)
![img_21.png](assets/rule_custom_responce.png)
The rest of configurations may be as it is

After this lets create a log group to see our logged data
![img_18.png](assets/log_group_creation.png)
And enable logging in waf 
![img_19.png](assets/logging_enabling.png)
After this lets add our CloudFront to WAF in Associated AWS resources
![img_20.png](assets/resource_adding.png)
Now we may try to access our site as before and add our string that will be blocked by WAF
![img_22.png](assets/waf_check.png)

And after this we will see our logs in CloudWatch
![img_23.png](assets/cloudwatch_insights.png)