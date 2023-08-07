## Secret Manager

#### RDS + Secret Manager

Goal: Create RDS DB and save credentials via Secret Manager. Configure Rotation

#### Secret Manager + Lambda

Goal: Develop Lambda function that will receive parameter name that exist in Secret Manager and will return unencrypted
Value back. Attach ALB for this lambda and test.

#### Secret Manager + ECS deployment

Goal: Develop small web application that will take 2 environments variables and return then within GET rest endpoint

* Env variables should be stored in Secret Manager and Encrypted with Customer Key
* You should create first version manually
* Second version should be created via Cloudformation

#### Questions:

* Why do we need Secret Manager?
* Secret Manager vs Systems Manager Parameter Store vs Parameter store Advanced
* What metadata secret contains?
* What is Version for secret?
* What is secret rotation? How it works?
* User Secret vs Master Secret (different by permissions) how it can be used?
* What is Recovery window for secret manager? (days)
* How we can delete secret without a recovery window?
* How price calculated for secret?
