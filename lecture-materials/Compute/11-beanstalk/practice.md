# Beanstalk

#### Create Beanstalk app using

* Should be High availability (spot+on-demand)
* Enable X-Ray
* Enable S3 log storage
* Enable log streaming to CloudWatch (retention 1 day, lifecycle: delete log after termination)
* Instances: Min - 2 , Max - 3
* Processor: arm64
* Place within 3 zones
* Scaling:
    * CPU
    * Average
    * Percent
* Deployment:
    * We want our application to be always available and when we have deployment we want to maintain full capacity
* Create a role with access for SQS and S3
* Monitoring:
    * p95
    * p50
    * We want to track all the 5xx errors
* Setup correct update window:
    * Our application is working daily within market ours (9-18)
* Add yourself for email notifications
* Create our own Custom VPC
* Database
    * Postgres or Mysql
    * Storage 7gb
    * High Availability
    * Delete DB after env deleted
* Do few deployments with small updates somewhere
* Swap ENV URL
    * Create new ENV with Visible updates and deploy it
    * Do Swap env url operation
* Terminate all the environments



#### Questions:
* Why do you need beanstalk?
* Web server environment vs Worker environment
* Environment vs application vs Application version
* What is Environment tier
* Which type of deployments Beanstalk contain?
* What is p50,p99, etc. metrics?
* What is BlueGreen deployments?
* Which type of deployments do you know?
* Which platforms are supported by BeanStalk?
* Why do we need .ebextensions file?
* Which requirements do we have for .ebextensions file ?
* Which Monitoring options do we have?
* Which Logging options do we have?
