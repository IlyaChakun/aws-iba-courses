# AWS Architect Certification Course Outline

## Course Duration: 10 Weeks

### Lectures (10)

1. **IAM + EC2 Basics:**
   - Acquaintance
   - IAM refresher, STS, Control Tower, AD, AWS Organizations, 
   - Ec2 (Instance types, Launch Template)
   - EBS, EFS, Instance store
   - ELB, TG, ASG
   - CloudNative vs Cloud Agnostic

2. **EC2 Advanced & Blob Storage & CDN:**
   - AWS Nitro System
   - AWS Graviton Processors
   - Beanstalk
   - S3
   - CloudFront, Global Accelerator

3. **Databases & Caches:**
   - RDS, Aurora, ElastiCache, DocumentDB, Neptune, Keyspaces, QLDB, TimeStream
   - DynamoDB, Dax
   - All Databases Comparison & use cases

4. **VPC:**
   - OSI, Network Protocols, Security Groups
   - Route53
   - ACM
   - Transit Gateway, Site to Site VPN, Direct Connect, Gateway Load Balancer
   - EFA vs ENA
   - Network Design Architectures

5. **Containerization & Serverless:**
   - ECS, ECR, EKS, Copilot
   - Lambda, Step Functions, SWF
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
   - AWS personal health dashboard
   - AWS Resource Access Manager
   - From Monolith to Distributed System Deployment Design

8. **Disaster Recovery & Migration:**
   - DMS, AWS Backup, MGN, VMware
   - Disaster Recovery Architecture
   - Migration to AWS Architectures

9. **Security:**
   - AWS WAF, AWS Shield, Firewall Manager, AWS Security Hub, Macie, Amazon Detective
   - KMS, CloudHSM, Secret Manager, SSM Parameter Store
   - AWS License Manager
   - Security Best Practice

10. **Data & Analytics : Data Storage & Data Migration and Transfer:**
   - Kinesis, Athena, Redshift, OpenSearch, EMR, QuickSight, Glue, LakeFormation, MSK
   - AWS elastic transcoder
   - Data Analytics System Designs
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

### Practice (10)

1. **Basic Cloud Deployments:**
   - EFS, EC2, ALB, TG, Global Accelerator, Route53
      - Create a deployment for 2 ALBs with TG, EC2 instances in different regions using Global Accelerator
      - You can test via IP address from Global Accelerator or Add route53 record and test via dns
      - Show the failover case (when one of the region went down)
      - Draw Deployment Schema
   - Create a Spot Fleet based on custom AMI with prebuild webserver with webapp
      - httpd webserver with simple html page in userdata
   - Practical test questions

2. **Blob Storage & CDN:**
   - Introduction to Amazon CloudFront
   - Understanding CloudFront Origin Groups
   - S3 + Cloudfront, Lambda@Edge, CloudFront Lambda
   - Practical test questions

3. **Serverless Architecture:**
   - Serverless E-commerce Architecture Project
      - DynamoDB, DynamoDB Streams, API Gateway, Lambda, SNS, SQS, X-ray
      - Additional: 
        - Security (WAF, SQS Protection)
        - Rate Limiting (WAF)
        - OPS (which metrics are you interesting in?)
        - How would you implement disaster recovery?
        - Deployment Automation (How would you deploy your solution in automated manner?)
        - Caching (Improve your solution by introducing caching. Try to introduce cache solution for each level, where possible)
   - Practical test questions

4. **Network Practice:**
   - VPC Private Link, Transit Gateway VPC Setup, Pair VPCs with CIDR block conflict

5. **Containerization Deployment:**
   - ECS Deployment (EC2 and Fargate)
   - Add Target Scaling Policy, Update deployment with VPC Endpoints

6. **Distributed Systems & SaaS**
   - Create a system design for distributed system
   - Practical tests

7. **Automation in Cloud:**
   - SQS, SNS, CloudWatch, RDS, System Manager, Config
   - Use AWS Systems Manager & Resource Group for Apache on EC2
   - Check Security group compliance using AWS Config

8. **Disaster Recovery & Migration:**
   - System Design: Create a disaster recovery plan for particular design 
   - Practical tests

9. **Security:**
   - Use Amazon Macie for S3 data, Implement WAF and Route53
   - Encrypt S3 bucket with AWS KMS, Monitor with CloudTrail

10. **Data & Analytics:**
    - Kinesis, Glue + S3 (ETL)