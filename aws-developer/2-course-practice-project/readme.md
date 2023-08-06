# CloudFileHub: Secure File Management on AWS()

- [CloudFileHub: Secure File Management on AWS](#cloudfilehub-secure-file-management-on-aws)
    - [Project Objective](#project-objective)
    - [AWS Stack](#aws-stack)
    - [Development Stages](#development-stages)
        - [Starting point Requirements](#starting-point-requirements)
        - [Design and Planning Phase](#design-and-planning-phase)
            - [Example Flow](#example-flow)
        - [Code Development](#code-development)
        - [Deployment Workflows](#deployment-workflows)
        - [Potential Enhancements](#potential-enhancements)
        - [DNS Management with Route 53](#dns-management-with-route-53)
        - [HTTPS Support with ACM](#https-support-with-acm)
        - [Alternate File Storage Options](#alternate-file-storage-options)
        - [Application-Level Caching](#application-level-caching)
        - [Web Application Firewall (WAF)](#web-application-firewall-waf)
        - [Content Delivery Network (CDN)](#content-delivery-network-cdn)
    - [Deployment Phase](#deployment-phase)
        - [EC2 Deployment](#ec2-deployment)
        - [Elastic Beanstalk Deployment](#elastic-beanstalk-deployment)
        - [CI/CD Implementation for Beanstalk Deployment](#ci/cd-implementation-for-beanstalk-deployment)
        - [ECS Fargate Deployment](#ecs-fargate-deployment)
        - [Infrastructure as Code (IaC) Implementation via CloudFormation](#infrastructure-as-code-iac-implementation-via-cloudformation)
        - [CI/CD Implementation for ECS Fargate Deployment](#ci/cd-implementation-for-ecs-fargate-deployment)
        - [Documentation and Diagram Creation](#documentation-and-diagram-creation)
        - [System Scaling Strategy](#system-scaling-strategy)
        - [Advanced: Disaster Recovery Strategy](#advanced-disaster-recovery-strategy)
        - [Advanced: IaC Implementation via AWS CDK](#advanced-iac-implementation-via-aws-cdk)
    - [Documentation](#documentation)

# Project Objective:

Develop a web application that allows users to upload and download files (such as images and documents). The system
should support user authentication, file management, and accessibility controls. The system must be cloud native and
implemented using AWS Services.

## AWS Stack:

- **Compute**: Elastic Container Service (ECS), EC2, Beanstalk
- **Container Registry**: Elastic Container Registry (ECR)
- **Load Balancer**: Application Load Balancer (ALB)
- **Storage**: Amazon S3, EFS
- **Database**: RDS (PostgreSQL or MySQL) or/and DynamoDB
- **DNS**: Route 53
- **SSL Certificate Management**: ACM
- **Caching**: ElasticCache (Redis) or DAX
- **Security**: Web Application Firewall (WAF)
- **Content Delivery**: Cloudfront
- **Advanced User Management**: Cognito
- **Ci/Cd**: CodePipeline, CodeDeploy, CodeBuild

## Development Stages

- ### Starting point Requirements
    - **File Management**:
        - Upload files (images, documents, etc.).
        - Control file accessibility (public or private).
        - Retrieve a list of files with metadata.
        - Retrieve metadata about a specific file.
        - Download a specific file.
        - Manage file ownership.
    - **S3Service Creation**: Try to create S3Service as a modular and portable solution (like a library) that can be
      reused without
      modification. (using your selected language)
    - **Statistics Module**: Develop a statistics module which will store information about uploading/downloading files
      and information about users. Use a relational database like MySql or PostgresSql.
    - **User Authentication**: Sign up and login functionality using Cognito.
    - **Web Firewall**: Implement security protection using AWS WAF.

### Design and Planning Phase

- **Technical Requirements Documentation**: Begin with documenting all technical requirements in a README file within
  the project repository, prior to kickstarting the implementation phase.
- **Technology Stack Selection**: Determine the most appropriate technology stack for the project from options such as
  Java, Python, or Node.js.
- **Database Design**: Design your database in a way that it only stores image metadata. Choose between RDS or DynamoDB
  for this purpose.
- **File Storage Design**: Plan for all files to be initially stored in a single folder on S3, with a future provision
  for creating separate folders for each user.
- Instructions for setting up and running the project locally should be included in the README file.
- #### Example Flow:
    - Initialize your AWS resources by creating an S3 bucket.
    - Develop the S3 service as a separate, reusable module.
    - Implement the logic for file uploading and downloading operations.
    - Establish connections between the application and both the RDS database and DynamoDB.
    - Conduct testing of the application's functionalities using Postman or a similar API testing tool.
    - Implement user sign-up and login functionalities using AWS Cognito.
- **This flow should be expanded as needed to include additional steps based on the project requirements.**

#### Code Development

- Embark on the development phase, translating the design plans and requirements into functional code.

#### Deployment Workflows

- Establish effective deployment procedures for your application which are described below.

#### Potential Enhancements

- Continually explore avenues for improving your application in terms of performance, usability, or functionality.

#### DNS Management with Route 53

- Make use of AWS Route 53 for reliable DNS management and efficient internet traffic routing to your application.

#### HTTPS Support with ACM

- Implement HTTPS to secure network connections, using AWS Certificate Manager (ACM).

#### Alternate File Storage Options

- Consider AWS Elastic File System (EFS) as a potential alternative to S3 for file storage.

#### Application-Level Caching

- Choose an application-level caching strategy by opting for either Redis or Amazon DAX, based on your database
  selection.

#### Web Application Firewall (WAF)

- Implement AWS WAF for OSI Level 7 protection, securing your application against prevalent web exploits.

#### Content Delivery Network (CDN)

- Implement AWS CloudFront as your content delivery network (CDN) for faster web content distribution to users.

## Deployment Phase

### EC2 Deployment

- Initially, deploy your web server on a single EC2 instance. Assign a public Elastic IP to this instance and use the
  default network for this setup.

### Elastic Beanstalk Deployment

- Leverage AWS Elastic Beanstalk to deploy the application, managing environments, and facilitating load balancing.

### CI/CD Implementation for Beanstalk Deployment

- Implement a continuous integration and continuous deployment (CI/CD) pipeline for Beanstalk deployments.

### ECS Fargate Deployment

- Set up a deployment using AWS services including ECS Fargate, ECR, ALB, Target Groups (TG), and Route 53. Ensure the
  deployment of at least two tasks.

### Infrastructure as Code (IaC) Implementation via CloudFormation

- Develop Infrastructure as Code (IaC) for the ECS Fargate deployment. While the initial deployment can be in a single
  file, the final version should be divided by target: VPC deployment, ECS cluster, ECS service, ECR, and so on should
  each be defined in separate files to be reusable.

### CI/CD Implementation for ECS Fargate Deployment

- Establish a CI/CD pipeline that pulls code from your Git repository, builds a Docker image, pushes it to your ECR, and
  deploys a new task definition to AWS ECS.

### Documentation and Diagram Creation

- **Architectural Diagram**: Generate a comprehensive architectural diagram displaying the AWS services employed.
- **Costs Diagram**: Craft a cost estimation diagram projecting expenses over 1 year.

### System Scaling Strategy

- Consider your Requests per Second (RPS) and identify the key metrics for scaling. Implement Step scaling and Schedule
  scaling using CloudFormation for the ECS service and test its performance using load generators.

### Advanced: Disaster Recovery Strategy

- Identify your Recovery Time Objective (RTO) and Recovery Point Objective (RPO). Design a disaster recovery solution
  covering two scenarios: achieving availability across at least two regions, and performing backup and restoration
  operations.

### Advanced: IaC Implementation via AWS CDK

- Develop Infrastructure as Code (IaC) for the ECS Fargate deployment using your chosen programming language, ensuring
  that your deployment operates correctly.

## Documentation:

- Maintain detailed documentation of code, architecture, and deployment procedures.
- Provide a detailed system architecture diagram, clearly illustrating all components of the AWS stack, how they
  interact, and data flow.
- Include a database schema diagram detailing tables, attributes, relationships, and indexing.
- Create a detailed architectural diagram of the utilized AWS services as part of the technical documentation.
- Outline a comprehensive disaster recovery strategy, including backup and recovery procedures, failover scenarios, and
  a defined Recovery Point Objective (RPO) and Recovery Time Objective (RTO).
- Create a cost document that calculates the estimated expenses for the application over the course of 1 year,
  considering all the AWS services utilized. Include different scenarios that could affect costs, such as increased
  traffic or additional storage requirements.