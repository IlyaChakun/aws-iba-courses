# AWS Architect Certification Course Outline

## Course Duration: 10 Weeks

### Lectures (11)

1. **IAM + EC2 Basics:**
   - IAM refresher, Control Tower, AD, AWS Organizations
   - Ec2 (Instance types, Launch Template, EBS, EFS, Instance store)
   - ELB, TG, ASG
   - CloudNative vs Cloud Agnostic

2. **EC2 Basics & Blob Storage:**
   - AWS Nitro System
   - AWS Graviton Processors
   - AWS HCP
   - Beanstalk
   - S3, CloudFront, Global Accelerator, Route53, ACM

3. **Databases & Caches:**
   - RDS, Aurora, ElastiCache, DocumentDB, Neptune, Keyspaces
   - QLDB, TimeStream, All Databases Comparison & use cases
   - Caching Strategies in AWS

4. **VPC:**
   - OSI, Network Protocols, Security Groups
   - Transit Gateway, Site to Site VPN, Direct Connect, Gateway Load Balancer
   - Network Design Architectures

5. **Containerization & Serverless:**
   - ECS, ECR, EKS, Copilot, DynamoDB, Lambda, Step Functions, SWF
   - API Gateway, SAM, ESC Deployment Architectures Presentation
   - AWS AppSync
   - Serverless Deployment Designs

6. **Distributed Systems & SaaS:**
   - Message Driven vs Event Driven
   - Kafka, SQS, EventBridge, Active MQ, AWS Batch, AppFlow
   - Distributed System Design
   - SaaS Design

7. **Automation in Cloud & Cloud OPS:**
   - System Manager, Config, EventBridge, AWS X-ray, CloudWatch, CloudTrail
   - Amazon Managed Grafana, AWS Inspector, AWS GuardDuty, Trusted Advisor
   - Amazon Managed Service for Prometheus
   - aws personal health dashboard
   - AWS Resource Access Manager
   - From Monolith to Distributed System Deployment Design

8. **Disaster Recovery & Migration:**
   - DMS, AWS Backup, MGN, VMware
   - Disaster Recovery Architecture

9. **Security:**
   - AWS WAF, AWS Shield, Firewall Manager, AWS Security Hub, Macie, Amazon Detective
   - KMS, CloudHSM, Secret Manager, SSM Parameter Store
   - AWS License Manager
   - Security Best Practice

10. **Data & Analytics:**
   - Kinesis, Athena, Redshift, OpenSearch, EMR, QuickSight, Glue, LakeFormation, MSK
   - aws elastic transcoder
   - Data Analytics System Designs

11. **Data Storage & Data Migration and Transfer:**
   - AWS Snow Family, FSx, Storage Gateway, AWS Transfer Family, DataSync
   - Data Migration Architectures

### Self Learning

- Cost Calculations (AWS Budget, AWS Cost Explorer)
- Other Services (SES, Pinpoint, Elastic Transcoder, Amplify)
- ML Services (Rekognition, Transcribe, Polly, Translate, Lex, Connect, Comprehend, SageMaker, Forecast, Kendra, Personalize, Textract)
- AWS AD, STS, Cognito, AWS SSO, CloudShell, CloudFormation, CDK, SDK, AWS Cloud9
- CI/CD on AWS (CodePipeline, CodeBuild, CodeCommit, CodeDeploy, CodeStar, CodeArtifact)
- AWS Artifact, Personal Health
- AWS Proton

### Practice (9)

1. **Cloud Deployment:**
   - EFS, EC2, ALB, TG, Global Accelerator
   - Create a deployment for 2 ALBs with TG, EC2 instances in different regions using Global Accelerator

2. **Blob Storage & CDN:**
   - S3 + Cloudfront, Lambda@Edge, CloudFront Lambda
   - Understanding CloudFront Origin Groups and Lambda@Edge
   - Setup lifecycle policy for S3 bucket files

3. **Serverless Architecture:**
   - DynamoDB, DynamoDB Streams, API Gateway, Lambda, SNS, SQS, X-ray
   - Serverless E-commerce Architecture Project

4. **Automation in Cloud:**
   - SQS, SNS, CloudWatch, RDS, System Manager, Config
   - Use AWS Systems Manager & Resource Group for Apache on EC2
   - Check Security group compliance using AWS Config

5. **Containerization Deployment:**
   - ECS Deployment (EC2 and Fargate)
   - Add Target Scaling Policy, Update deployment with VPC Endpoints

6. **Network Practice:**
   - VPC Private Link, Transit Gateway VPC Setup, Pair VPCs with CIDR block conflict

7. **Security:**
   - Use Amazon Macie for S3 data, Implement WAF and Route53
   - Encrypt S3 bucket with AWS KMS, Monitor with CloudTrail

8. **Data & Analytics:**
   - Kinesis, Glue + S3 (ETL)
   - Real

9. **System Design and practical tests**