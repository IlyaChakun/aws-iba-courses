# DynamoDB. API Gateway. Lambda

### 1. Create serverless application.
Goal: create an application to save products with array of attributes.

![](pictures/dynamo-tables.png)

- Create a dynamoDb table for products.

![](pictures/dynamo-table.png)

- Create a lambda function based on Python to receive a POST request with Product data. Required: Id,productName,
productCost. Create a GET logic to return all products in the database.

![](pictures/lambda_get.png)
![](pictures/lambda-post.png)

- Create an API Gateway for two methods, GET and POST.

![](pictures/api-gateway-get-post.png)

- Test application via postman.

![](pictures/postman-post.png)
![](pictures/postman-get.png)
![](pictures/dynamo-result.png)


### Create rds  and setup Lambda based on Python.

- Create an RDS database (postgres).

![](pictures/rds-database.png)

- Connect to it via pgadmin and create 1 table users, fields: id, firstName, lastName.

![](pictures/pgadmin.png)

- Create a python application that will connect to the database and insert users from POST request and return users 
via GET request. Create a lambda function based on this python app.

![](pictures/get-lambda.png)
![](pictures/post-user.png)
![](pictures/post-user-pg.png)

- Create an ALB and adjust your lambda response.

![](pictures/creating-alb.png)

- Database connection should be out of lambda code inside lambda.

![](pictures/lambda-alb-trigger.png)

- Pass database url via environment variable.

![](pictures/lambda-env-var.png)

- Create few versions of lambda by changing print line (should print v1 and v2 for appropriate version)

![](pictures/lambda-versions.png)

- Create an alias for v1 as dev and v2 as prod. Create a weighted rule for 50% and 50% for aliases.

![](pictures/lambda-alias.png)

- Enable AWS X-Ray and take a look on a service map.

![](pictures/lambda-xray-serv.png)
![](pictures/lambda-xray-traces.png)

- Make a few calls and view the results.

![](pictures/get-alb-resp-v1.png)
![](pictures/get-alb-resp-v2.png)

- Move DB credentials to Secret Manager at the final step and test your lambda.

![](pictures/secretmanager-creating.png)
![](pictures/secretmanager-value.png)


### Create an architecture to store S3 objects metadata inside of dynamodb using lambdas.

- Create S3 bucket.

![](pictures/s3-bucket.png)

- Create a lambda function to add a new record with file metadata to the table of dynamodb.

![](pictures/lambda-save-s3-metadata.png)

- Create a Dynamodb table and setup invoke of lambda function on uploading in S3.

![](pictures/dynamoDBs3.png)
![](pictures/s3-objects.png)
![](pictures/dynamoDBs3Object.png)

- Create another lambda to retrieve image metadata (name, extension, etc)

![](pictures/lambda-get-object-metadata.png)
![](pictures/lambda-get-object-result.png)

- Create API Gateway and point it on this lambda.

![](pictures/api-gateway-get-metadata-dynamo.png)

- Test it and see if you will upload object to s3 you will have a record in dynamodb.

![](pictures/api-gateway-retrieve-metadata.png)


### S3 + eventBridge + Event notification + SNS + Email message

- Create s3 bucket.
![](pictures/s3-bucket-create.png)

- Create a standard SNS topic.
![](pictures/sns-topic.png)

- Create SES subscription for your email.
![](pictures/create-subscribtion.png)

- Setup event notification for s3 with EventBridge.
![](pictures/eventbridge.png) 
![](pictures/aws-email.png)


### Create a web rest server with 1 get endpoint and deploy it to ec2 or ecs.

- Create a lambda function to be able to send HTTP requests with a payload based on Python or node js.

![](pictures/httpcronjob.png)

- Create event bridge cron jobs to call your application every 5 min.

![](pictures/eventbridgecron.png)

- Run your application locally and make it available via Ngrok.

![](pictures/ngrok.png)

- Run your application into Ec2 with (ALB or public dns) and update eventBridge payload.

![](pictures/logs.png)
![](pictures/albngrok.png)

- Check logs via Cloudwatch.

![](pictures/cwcj.png)


