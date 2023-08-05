# Creating custom vpc

We will create vpc with 2 public, 2 private and 2 database subnets.

![](pictures/vpc-creating.png)

Write size of your vpc and click create.

Then you need create public subnets. 

![](pictures/vpc-create-public-subnet.png)

In order for our subnets to become public, check the box as in the screenshot below.

![](pictures/vpc-auto-assignIP.png)

Next change Route tables for our subnets. Attach Internet Gateway.

![](pictures/vpc-route-table-public.png) 

Then you need create private subnets and create private route table and attach private subnet to it.
But in this case, you need create 2 route table, for private A and B subnets! This need for NAT gateway.
- NAT Gateway A connect to private sub A
- NAT Gateway B connect to private sub B

Also for NAT Gateway you need create elastic IP, do this while creating NAT Gateways.

![](pictures/vpc-route-table-private-A.png)
![](pictures/vpc-route-table-private-B.png)

Next create database subnet and route table. Associate it. vpc-subnets
![](pictures/vpc-route-table-database.png)

Your subnets :

![](pictures/vpc-subnets.png)

Your route tables :

![](pictures/vpc-route-tables.png)

Your NAT Gateways

![](pictures/vpc-natgateways.png)


VPC has been created!


### Tasks
### 1. Create bastion instance and test ssh connection to it.

First of all we create SG for bastion.
![](pictures/bastion-sg.png)

Now let`s go create Bastion Host.

Go in Autoscaling group. Click create.

Enter a name, then you need a launch template.(Choose own or create a new one).
Below I have described how to create a new

![](pictures/bastion-launch-conf.png)
![](pictures/bastion-launch-1.png)
![](pictures/bastion-launch-2.png)
![](pictures/bastion-launch-3.png)
![](pictures/bastion-launch-4.png)

You chose a name and launch template, click next.
Choose your VPC and public subnets. Click next.
![](pictures/bastion-launch-5.png)
![](pictures/bastion-launch-6.png)
![](pictures/bastion-launch-7.png)
Then next and create.

![](pictures/bastion-launch-8.png)

In Instances you can see your Bastion Host.
![](pictures/bastion-launch-9.png)

Let`s go connect to it via ssh.

![](pictures/bastion-launch-10.png)

### 2. Create ec2 in private and database subnets.

![](pictures/db-private-subnet.png)

### 3. SSH to instance in private and database subnet and Test instances with ping command

- Connect on your Bastion Host.

![](pictures/bastion-launch-10.png)

- Now you need your key pair. Open your key pair on your computer (notepad), copy key,
create file on your Bastion and save the key in it.

![](pictures/create-bastion-key.png)

Now we can connect to private subnet and database subnet. Let's do it.
![](pictures/bastion-private-subnet.png)

As you can see, IP address is changed, because now you are on ec2 in private subnet. 
Check Internet connection on your ec2. Just ping google.

Then we return to the bastion and go to the database instance. And check your Internet connection. 
Ping google. As you can see, it doesn't work. This is correct, because our database subnet does not have internet access.
![](pictures/bastion-db-subnet.png)

Task ended.


### VPC peering

- Create VPC A and VPC B in different regions.
- Create 2 subnets for VPC A: 1 public subnet and 1 private subnet. For vpc B just one private subnet.
![](pictures/vpc-A.png)
![](pictures/vpc-B.png)
![](pictures/vpc-A-sub.png)
![](pictures/vpc-B-sub.png)

- Create a bastion host inside of VPC A in a public subnet. Create a bastion host inside of VPC A in a public subnet.
Create an ec2 instance in each VPC in a private subnet.

![](pictures/vpc-A-ec2.png)
![](pictures/vpc-B-ec2.png)

- Create VPC Peering Connection from A to B, accept connection in vpc B. Modify Route tables for both VPC.
![](pictures/vpc-peering.png)
![](pictures/vpc-peering-routes.png)
![](pictures/vpc-peering-routes1.png)

- Connect to vpc A bastion host, then to private instance in private subnet then ping private instance in vpc B,
then ssh to private instance in vpc B.
![](pictures/peering-1.png)
![](pictures/peering-2.png)
![](pictures/peering-3.png)

Task ended.


### VPC Gateway endpoint

#### Goal: upload file in s3 bucket using vpc gateway endpoint without using public internet.

- Create a default S3 bucket

![](pictures/s3-creating.png)
![](pictures/s3-creating-1.png)
![](pictures/s3-creating-2.png)

- Create a VPC with 2 subnets: 1 public and 1 private. 10.10.0.0/16

![](pictures/s3-vpc.png)

- Launch bastion host and instance in private subnet.

![](pictures/s3-ec2.png)

- Create a proper iam role for private instance, give s3 full access permissions.

![](pictures/s3-role.png)

- Create a Gateway Endpoint. Open in vpc Endpoints. Search for S3 and choose Gateway endpoint.

![](pictures/s3-endpoint.png)
![](pictures/s3-endpoint-creating.png)

- Choose your vpc and choose a private subnet.

![](pictures/s3-select-vpc.png)
![](pictures/s3-created-endpoint.png)

- Create a text file in a private instance.

![](pictures/s3-txtonprivateec2.png)

- Upload it on your s3 bucket: aws s3 cp file.name s3://bucket-name  -- region name

![](pictures/s3-uploaded.png)
![](pictures/s3-uploadedFile.png)


### VPC Interface endpoint and SQS.

#### Goal: access aws services with private network using vpc interface endpoint

- Create SQS.
- Create a VPC with 2 subnets: 1 public 1 private.

![](pictures/interface-vpc.png)
![](pictures/interface-ec2.png)

- Create an IAM role with full access for SQS for private instance.

![](pictures/interface-role.png)

- Open endpoints for VPC, search for SQS with Interface type, choose vpc, az and your private subnet.

![](pictures/interface-endpoint.png)
![](pictures/interface-set.png)
![](pictures/interface-set1.png)

- Enable DNS name should be enabled! Create a security group for HTTPS from your vpc CIDR. Select this group for
the endpoint.

![](pictures/interface-set2.png)
![](pictures/interface-sg.png)

- Verify that you got a message in sqs service interface.
![](pictures/interface-sqs.png)


### VPC via Cloudformation.

- Create a vpc with template.
- Change template for yourself










