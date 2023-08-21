# AWS Course Plan

Duration: **5 months** (1 lecture, 1 practice per week)  
Total Lectures: **20**  
Total Practices: **20**

## Lectures

1. Introduction and IMA
2. EC2
3. EBS, EFS, Instance Store
4. ELB, ASG, Beanstalk
5. SQS, SNS, IaC (CloudFormation, CDK, SDK)
6. CloudWatch, CloudTrail, EventBridge, System Manager, AWS Config
7. VPC (Part 1)
8. VPC (Part 2)
9. Route53 and ASM, Kinesis
10. Security: KMS, Secret Manager, SSM
11. Cognito
12. RDS, Aurora, ElastiCache
13. CloudFront, Global Accelerator
14. S3 (Part 1)
15. S3 (Part 2)
16. ECS, ECR, Copilot
17. DynamoDB, DAX
18. Lambda, Step Functions, X-ray, API Gateway, SAM
19. CI/CD
20. DDOS: WAF, Shield, GuardDuty, Personal Health
21. Other: Athena, MSK, Active Directory, AppSync, Cloud9, Amplify, OpenSearch, AWS Org, Inspector, SES

## Practice

* EC2
    * Launch Internet-Accessible Web Server using EC2 with Manual Setup
    * Setup webserver on EC2 using Userdata and attach EIP
    * Create an EC2 Server and Test Access for S3
    * Create and Configure Amazon EC2 Auto Scaling with Launch Templates
    * Spot Fleet
    * Placement Group

* EBS, EFS, Instance Store
    * EBS and EC2: Resizing Amazon EBS Volume
    * EFS and EC2: Mount Elastic File System (EFS) on EC2
    * EBS and EC2: Termination protection
    * Instance store: Create EC2 with instance store

* ELB, ASG, Beanstalk
    * Setup Highly Available Server Stack using ALB + Target Group
    * Understanding AWS ALB Path Based Routing
    * Creating an Application Load Balancer from AWS CLI
    * ALB with Multiple Target groups for ECS Cluster

* SQS, SNS, Lambda
    * Configuring a CloudWatch Alarm for Lambda Invocation Errors with SNS Notifications
    * Introduction to SQS
    * Difference between SQS Visibility Timeout and Delay Queue

* CloudWatch, CloudTrail, EventBridge, System Manager
    * Install CloudWatch Logs Agent on EC2 Instance and View CloudWatch Metrics
    * AWS Access control alerts with CloudWatch and CloudTrail
    * Automating EBS Snapshot Creation Using CloudWatch and SNS
    * CronJobs via aws: EventBridge + Lambda
    * S3 + eventBridge + Event notification + SNS + Email message

* VPC (Part 1)

    * Create manual VPC setup
    * VPC peering
    * VPC Gateway endpoint
    * VPC Flow Logs: Creating AWS VPC Flow Logs and Generating Traffic

* VPC (Part 2)
    * VPC Interface endpoint and SQS
    * VPC Private Link: Create private connection between two vpcs using ELB

* KMS, Secret Manager, SSM Parameter Store
    * KMS: EBS Encryption
    * KMS: KMS Automatic and Manual keys rotation
    * Secret Manager: RDS + Secret Manager
    * Secret Manager: Secret Manager + Lambda
    * SSM Parameter Store: Demo comparing SSM with Secret Manager

* Cognito
    * Create a userPool with signUp and signIn options
    * Create Identity pool

* RDS + Aurora
    * RDS Multi-AZ + failover In custom VPC + Cloudwatch insights
    * Create an Aurora database with PostgreSQL or Mysql engine
    * Aurora serverless
    * ElastiCache: Renew caching strategies (theory + diagram)

* CloudFront, Global Accelerator, Kinesis
    * Introduction to Amazon CloudFront
    * Understanding CloudFront Origin Groups
    * Understanding Lambda@Edge

* S3
    * Versioning for s3 bucket
    * Backup for s3 bucket
    * Deploy a static website using S3
    * Setup lifecycle policy for s3 bucket files
    * S3 Encryption
    * Discover sensitive data present in S3 bucket using Amazon Macie

* ECS
    * Deploy web application using ECS Based on Ec2
    * Deploy web application using ECS Based on Fargate

* DynamoDB, DAX
    * DynamoDB PITR & On-Demand Backup and Restore
    * DynamoDB & Global Secondary Index
    * Configuring DynamoDB Streams Using Lambda
    * DynamoDB RCU, WCU math (practice)

* Lambda, Step Functions, X-ray, API Gateway, SAM
    * Create an architecture to store S3 objects metadata inside dynamodb using lambdas (ask to write code before)
    * DynamoDB API Gateway Lambda Secret Manager X-Ray((ask to write code before))

* CI/CD
    * Create and configure Codepipeline with Elastic Beanstalk
    * Create and Deploy applications using CodeDeploy and CodePipeline
    * Deploy sample containerized application on ECS using CodeDeploy
    * Demo & theory: Cicd with gitlab using aws resources

* DDOS: WAF, Shield, GuardDuty, Personal Health
    * WAF & ALB
    * Cloudfront & WAF
    * ECS + ECR + ALB + **WAF** + ROUTE53

* Practice Test 1

* Practice Test 2