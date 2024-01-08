# AWS Course Plan

Duration: **5 months** (1 lecture, 1 practice per week)  
Total Lectures: **20**  
Total Practices: **20**

## Lectures

1. Acquaintance, Introduction, IMA, Active Directory, AWS Org, STS, Control Tower, EC2
2. EBS, EFS, Instance Store
3. ELB, TG, ASG, Beanstalk
4. message_vs_driver_driven_architecture, SQS, SNS, EventBridge, MQ, App Sync, IaC (CloudFormation, CDK, SDK)
5. Cloud OPS: CloudWatch, CloudTrail, System Manager, AWS Config, Amazon Managed Grafana, AWS Inspector,
   AWS GuardDuty, Trusted Advisor, AWS personal health dashboard, AWS Resource Access Manager
6. VPC (Part 1)
7. VPC (Part 2)
8. Route53 and ASM, Kinesis
9. Security: KMS, Secret Manager, SSM
10. Cognito
11. RDS, Aurora, ElastiCache + overview of other databases
12. CloudFront, Global Accelerator
13. S3 (Part 1)
14. S3 (Part 2)
15. ECS, ECR, Copilot
16. DynamoDB, DAX
17. Lambda, Step Functions, X-ray, API Gateway, SAM, SWF
18. CI/CD, Cloud9, Amplify
19. DDOS: WAF, Shield, GuardDuty, Personal Health
20. Exam Preparation, Recap, Practical Tests

## Self Study

* Other: MSK, AppSync, OpenSearch, Inspector, SES

## Practice

1. EC2
    * Launch Internet-Accessible Web Server using EC2 with Manual Setup
    * Setup webserver on EC2 using Userdata and attach EIP
    * Create an EC2 Server and Test Access for S3
    * Create and Configure Amazon EC2 Auto Scaling with Launch Templates
    * EC2: Dedicated Instance vs Dedicated Host EC2
   
2. EBS, EFS, Instance Store
    * EBS and EC2: Resizing Amazon EBS Volume
    * EFS and EC2: Mount Elastic File System (EFS) on EC2
    * EBS and EC2: Termination protection
    * EFS: Performance Modes
    * EBS: How to encrypt unencrypted snapshot?
    * Instance Store: Describe usage pattern
   
3. ELB, ASG, Beanstalk
    * Setup Highly Available Server Stack using ALB + Target Group
    * Understanding AWS ALB Path Based Routing: Add one more target group behind ALB with different path
    * Creating an Application Load Balancer from AWS CLI
    * Beanstalk deployment for Demo App
   
4. SQS, SNS, Lambda
    * Configuring a CloudWatch Alarm for Lambda Invocation Errors with SNS Notifications
    * Introduction to SQS Lab
    * Difference between SQS Visibility Timeout and Delay Queue Lab
   
5. CloudWatch, CloudTrail, EventBridge, System Manager
    * Install CloudWatch Logs Agent on EC2 Instance and View CloudWatch Metrics
    * AWS Access control alerts with CloudWatch and CloudTrail
    * Automating EBS Snapshot Creation Using CloudWatch and SNS
    * CronJobs via aws: EventBridge + Lambda
    * S3 + eventBridge + Event notification + SNS + Email message
   
6. VPC (Part 1)
    * Create manual VPC setup
    * VPC peering
    * VPC Gateway endpoint
    * VPC Flow Logs: Creating AWS VPC Flow Logs and Generating Traffic
   
7. VPC (Part 2)
    * VPC Interface endpoint and SQS
    * VPC Private Link: Create private connection between two vpcs using ELB

8. **Practical Tests**

9. KMS, Secret Manager, SSM Parameter Store
    * KMS: EBS Encryption
    * KMS: KMS Automatic and Manual keys rotation
    * Secret Manager: RDS + Secret Manager
    * Secret Manager: Secret Manager + Lambda
    * SSM Parameter Store: Demo comparing SSM with Secret Manager
   
10. Cognito
    * Create a userPool with signUp and signIn options
    * Create Identity pool
    
11. RDS + Aurora
    * RDS Multi-AZ + failover In custom VPC + Cloudwatch insights
    * Create an Aurora database with PostgreSQL or Mysql engine
    * Aurora serverless
    * ElastiCache: Renew caching strategies (theory + diagram)
    
12. CloudFront, Global Accelerator, Kinesis
    * Introduction to Amazon CloudFront
    * Understanding CloudFront Origin Groups
    * Understanding Lambda@Edge
    
13. S3
    * Versioning for s3 bucket
    * Backup for s3 bucket
    * Deploy a static website using S3
    * Setup lifecycle policy for s3 bucket files
    * S3 Encryption
    * Discover sensitive data present in S3 bucket using Amazon Macie

14. **Practical Tests**

15. ECS
    * Deploy web application using ECS Based on Ec2
    * Deploy web application using ECS Based on Fargate

16. DynamoDB, DAX
    * DynamoDB PITR & On-Demand Backup and Restore
    * DynamoDB & Global Secondary Index
    * Configuring DynamoDB Streams Using Lambda
    * DynamoDB RCU, WCU math (practice)

17. Lambda, Step Functions, X-ray, API Gateway, SAM
    * Create an architecture to store S3 objects metadata inside dynamodb using lambdas (ask to write code before)
    * DynamoDB API Gateway Lambda Secret Manager X-Ray((ask to write code before))

18. CI/CD
    * Create and configure Codepipeline with Elastic Beanstalk
    * Create and Deploy applications using CodeDeploy and CodePipeline
    * Deploy sample containerized application on ECS using CodeDeploy
    * Demo & theory: Cicd with gitlab using aws resources

19. DDOS: WAF, Shield, GuardDuty, Personal Health
    * WAF & ALB
    * Cloudfront & WAF
    * ECS + ECR + ALB + **WAF** + ROUTE53

20. **Practical Tests** 
