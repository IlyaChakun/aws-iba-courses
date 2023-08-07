# RDS

#### RDS Multi-AZ + failover In custom VPC + Cloudwatch insights

* Create custom VPC
* Place db into private subnet
* Create mysqldb multi az
* Connect and test that is works via ec2 bastion (or other option)
* Simulate failover (reboot) Which other options exist?
* Check that az changes

_Note:_
Amazon RDS provides an option to simulate Availability Zone failure and High Availability (HA) by offering an option to
reboot the Oracle DB instance with the failover. This option initiates Availability Zone level failover and the instance
on the secondary Availability Zone becomes primary, and the instance on the primary Availability Zone becomes secondary.

* RDS snapshot + encryption

1. A company is deploying a new web application. Configure a highly available MySQL 8.0 database with the following:
2. Unless specified below, use the default configuration settings.
3. Create a custom DB parameter group and set the event_scheduler parameter to true and use this parameter group during
   DB instance creation.
4. Create a custom AWS Key Management Service (AWS KMS) key and use this key during DB instance creation.
5. Create a VPC security group that allows TCP port 3306 from the CIDR block 192.168.1.0/24. Use this security group
   during DB instance creation.
6. Launch the Amazon RDS DB instance.
7. After launch, take a manual RDS DB snapshot.
   Provide the snapshot Amazon Resource Name (ARN):

#### RDS based on PostgreSQL + Cloudwatch metrics

* Create RDS with Postgresql engine.
* Connect to db with dbviewer or other tool
* Test db with java application with add and get
* Create a read replica
* Promote read replicate to standalone db
* Kill old db
* Test new db with Java application
* Make a snapshot
* Delete db
* Restore via snapshot
* Resize db to bigger size via maintain window

#### RDS + AWS Backup

Goal: create automatic backup strategy using AWS Backup service

[Flow](https://aws.amazon.com/getting-started/hands-on/amazon-rds-backup-restore-using-aws-backup/)

#### RDS Cloudformation for Postgresql

Create a script:

* Environment as parameter
* Name as parameter
* instance class as list + parameter
* Storage type as list
* public accessible as param default false
* port, username, password as parameter
* multi-az parameter
* delete on termination as parameter
* Include other params as you wish
* Configure backup
* Create a good output section

Parameter group should be created in the same template with default settings

* override or create new at least one parameter

### Aurora

#### Create an Aurora database with PostgreSQL or Mysql engine

Goal: just to create a manual setup in **private** VPC (you need to create it previously) , connect to db and review a
possible db settings.

* You need to find which option do we have to connect to db in private
  subnet. [Examples](https://www.linkedin.com/pulse/connecting-rds-db-private-subnet-aws-from-using-ssm-port-srinivasan/?trk=pulse-article_more-articles_related-content-card)
* Choose an option, best one is NLB.
* Connect to db, create a table and make a test select

#### Aurora DB: Performance insight, Test fault tolerance, Global Database,

##### You can use this guide as a good example, [guide link](https://awsauroralabsmy.com/provisioned/create/)

Steps:

* Create a new db cluster manually
* Create a replica autoscaling and test it (use python for test) (target 15%, 180 seconds for both, min 1, max
    2) [Example](https://awsauroralabsmy.com/provisioned/autoscale/)
* [Monitor performance insight, generate load and take a look metrics](https://awsauroralabsmy.com/provisioned/perf-insights/)
* [Create a CLONE using aws rds restore-db-cluster-to-point-in-time](https://awsauroralabsmy.com/provisioned/clone/)
* [Test a manual db cluster failover using SNS](https://awsauroralabsmy.com/provisioned/failover/#2-testing-a-manual-db-cluster-failover)
* [Create an RDS Proxy](https://awsauroralabsmy.com/provisioned/failover/#5-using-rds-proxy-to-minimize-failover-disruptions)
* [Test fault Tolerance](https://awsauroralabsmy.com/provisioned/failover/)
    * Set up failover event notifications
    * Test a manual DB cluster failover
    * Test fault injection queries (Simulate engine crash)
    * Test a failover with cluster awareness
    * Use RDS Proxy to minimize failover disruptions

#### Aurora serverless

##### Serverless v1

Goal: Create a serverless database. Use Aurora Serverless v1 with AWS Lambda and RDS Data API.

* Create an Amazon Aurora Serverless v1 database manually.
  Note: [example](https://catalog.us-east-1.prod.workshops.aws/workshops/098605dc-8eee-4e84-85e9-c5c6c9e43de2/en-US/lab10-aurora-serverless/setup)
* Connect to the DB, create table users with few fields
* [Example of lambda](https://catalog.us-east-1.prod.workshops.aws/workshops/098605dc-8eee-4e84-85e9-c5c6c9e43de2/en-US/lab10-aurora-serverless/lambda)
* Create lambda to be able to save data into DB
* Create lambda to be able to get user by id, or get all users (based on a payload in the request)
* Attach this lambdas to API gateway or ALB (explain or choice)
* Move DB connection parameters to Secret Manager
* Integrate RDS Proxy. Explain why it is a good solution.
* Optional: Create a lambda layer with a generic code: retrieve SM parameters, connect to db, etc. on your choice

##### With previous setup do the same with Serverless v2

* After you completed lab setup you need to test db
  scaling. [example of metrics](https://catalog.us-east-1.prod.workshops.aws/workshops/098605dc-8eee-4e84-85e9-c5c6c9e43de2/en-US/lab13-aurora-serverless-v2/scaling)
* Next step is to test mixed-configuration
  cluster. [Example](https://catalog.us-east-1.prod.workshops.aws/workshops/098605dc-8eee-4e84-85e9-c5c6c9e43de2/en-US/lab13-aurora-serverless-v2/provtoserverless)
* Convert a provisioned reader to Serverless v2 reader
* Convert a provisioned writer to Serverless v2 writer
* Modify the minimum and maximum ACU for the Serverless v2 cluster
* Fallback and convert cluster to provisioned

#### RDS Aurora CloudFormation

* All dynamic info should be parameters
* Enable encryption, keys on your choice
* Create good output section
* Be ready to describe your setup choice




