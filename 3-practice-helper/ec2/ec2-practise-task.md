# Tasks with ec2-instance

### 1. Launch internet accessible web server using ec2 with manual setup. Launch ec2 instance, setup web server using httpd and html page, test it via public ip address.

Connect to ec2-instance
![](assets/connect-to-ec2.png)

Write some commands:

- sudo su
- yum update -y
- yum install httpd -y
- service httpd start
- chkconfig httpd on

And create html file via "nano" command


Enter my Public IPv4 DNS from ec2-instance

![](assets/ec2-dns-name.png)

And you can see your result

![](assets/ended-task1.png)

Task ended!

### 2. Setup EC2 using userdata. Automate step 1 using userdata. Do your steps to set up a web server via userdata, test it via a public ip address.

When we want to create ec2 instance with userdata, you need select "Advanced settings" 

Then you need enter your script such as :

/yum update -y

/yum install -y httpd

/systemctl start httpd

/systemctl enable httpd

/echo "(h1 Hello World /h1" > /var/www/html/index.html

#### When your instance is running copy your public IPv4 and past in browser

![](assets/public-ip.png)

#### You can see the result

![](assets/result-hello-world.png)

Task ended!

### 3. Setup EC2 using userdata and create a static public ip address. Reproduce previous step, attach elastic ip, reboot instance, test it via elastic ip.

Just create ec2-instance, add the elastic ip, (remember public ip) stop the ec2-instance.
Run instance again.
As you can see with elastic ip our public ip is not changed. Check it in your browser.

![](assets/public-elastic-ip.png)

### Don't forget to delete everything you've done.

Task ended!

### 4. Create an ec2 server and test access for S3. Create a test s3 bucket (just a simple s3 bucket with full default settings). Create EC2 and try to get a list of S3 buckets in the account. You should get an error, google it and try to understand why. Fix the error using iam role with right iam permissions.

Create ec2-instance as you did it in previous steps. And create s3 bucket.
Next step try to connect to s3 via ec2-instance. You will receive the error

![](assets/try-connect-to-bucket.png)

After this, you should give the permissions so that you can connect to s3-bucket.
For this we should create "IAM role"

I`ll join the role : AmazonS3ReadOnlyAccess

![](assets/s3-aim-policy.png)

When you created the role, next you need to attach this one to your ec2-instance

![](assets/attach-role.png)

After this enter command one more time and you can see, you have access to s3-bucket. And you can see my files which I`ve uploaded in my bucket

![](assets/s3-bucket-files.png)

Task ended!

### Don't forget to delete everything you've done.

### 5. Launch template. Create a Launch template with basic settings and userdata. Test it via public ip.

Click on "Create Launch Template", enter "name", "quick start with AWS", "Instance type - t2.micro", choose your own "Key pair" and "Security groups".
In "Advanced details" enter userdata as you did it in previous tasks.

Then you can see your Template :

![](assets/ec2-template.png)

Launch ec2-instance from the template and check it.

![](assets/check-template.png)

Enter your public ip and see the result

![](assets/hw.png)

Task ended!

### Don't forget to delete everything you've done.

### 6. Setup highly available server stack using ALB + Target Group

- Create a fleet of EC2 instances ( at least 2 servers) with your userdata. You can use the Launch template from the previous step.
- Create a target group. (use Instances for target type)
- Create ALB. Choose at least two subnets, don`t forget to create a security group for alb.
  Test your application via ALB DNS name.
- Make sure your server does not accessible via server public ip (only from ALB)
  (This should be done via properly configured security group)

You need to create 3 ec2 instance in different AZ for high availability.

![](assets/ec2-3AZ.png)

Then you should create a target group and also register your ec2 instances in it.

![](assets/create-tg.png)
Enter a name and leave the default settings.

Next step is creating ALB. (Choose ALB)
![](assets/create-alb.png)
![](assets/alb.png)

Enter name of your ALB, choose all AZ (for High Availability), create a new security group for ALB.
In "Listeners and routing" you need forward to your target group. And click - create.

#### Before setting up, open all your servers in the browser and see what they are available to you!
![](assets/result-hello-world.png)

After this steps you need configure security groups.
In SG of ALB inbound rules will be http and outbound rules will be SG of your instances.

In SG of your instance inbound rules will be the ALB SG and outbound rules keep default.

If you right configure, you will see that your ec2 instances UNAVAILABLE from public IP

![](assets/error-ec2.png)

And if you check through ALB you can see that it works

Since I have three instances, when checking through the ALB, I will receive 3 different IPs, since our ALB redirects traffic to them.

![](assets/in1.png)
![](assets/in2.png)
![](assets/in3.png)

Task ended!

#### Don't forget to delete everything you've done.

### EBS and ec2
- Create EC2. Create EBS. Attach it to newly created ec2. 
- Create a file on this new EBS.
- Create a second Ec2 and reattach this ebs to the second ec2.
- Ssh to the second instance and double check that you have a file from the first instance

You need create ec2 and new EBS volume.
Then attach EBS volume to ec2-instance.

Selected EBS is new.
![](assets/new-ebs.png)
Click - Actions - Attach volume and choose your ec2-instance.
![](assets/attach-ebs.png)
And EBS already attached to ec2.
![](assets/ec2-ebs.png)

Then via ssh connect to your ec2.

![](assets/connect-ec2.png)

Then you need create file ( for example text.txt )

![](assets/text.png)

How to do it you can find here : [Link] : https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html

After this, detach your created EBS volume from ec2.
Create new ec2 and attach EBS volume with file to new ec2 and check the file from this ec2.

Task ended!

#### Don't forget to delete everything you've done

### EFS and ec2
- Create EC2. Create EFS.
- Attach EFS to EC2.
- Try to upload a file on EFS from this EC2.

![](assets/create-efs.png)

![](assets/efs-hello.png)

Task ended!

#### Don't forget to delete everything you've done

### EBS and ec2
- Create an EC2 instance with next ebs settings:

  - Create one more ebs volume
  - Do not delete after instance terminated
  - Type: gp3
  - Name: /dev/sdy/
  - Encrypted using default key

- Delete ec2 instance, test that your ebs volume is still there.
- Delete it.

![](assets/sec-ebs.png)

Our ec2 has two EBS volumes
![](assets/two-ebs.png)
![](assets/two-ebs-vol.png)

Then delete ec2 and test that your ebs volume is still there.
As you can see, we have only one EBS volume. Why? Where is the first?

![](assets/one-ebs.png)

Task ended!

#### Don't forget to delete everything you've done

### Placement Groups
- Create all 3 types of placement groups.
- Launch 2 instances in each.
- Describe the difference.

Create Placement Groups

![](assets/create-pg.png)

Launch ec2 in each.

![](assets/ec2-pg.png)

Task ended!


#### Don't forget to delete everything you've done.

### Create AMI with httpd server. Create ec2 with httpd and html page. Launch instance using AMI and test that httpd works.

First of all you need to create ec2 instance. Then you can do AMI.
![](assets/ami.png)

Then delete your ec2 instance and launch new from AMI. And check it through the public IP.

![](assets/ec2-ami.png)

![](assets/ami-check.png)

Task ended!

#### Don't forget to delete everything you've done.

### 7. Launch Configuration and Autoscaling group

- Create launch configuration using previous AMI and autoscaling group based on it.
  Test it via ALB.

Click on Launch Configuration - Create Launch Configuration with AMI.
Then check how it`s work,through ALB.

Task ended!

#### Don't forget to delete everything you've done.


### Spot Fleet

- Creating a launch template with default settings, with t2.micro linux image and httpd userdata.
- Create an auto scaling group and test it via ALB.
- Create Spot Fleet Request with existing launch template.
- Test instance via public IP.
- Interrupt a Spot Instance directly from Amazon EC2 Console.
- What is the difference between allocation strategy?

Now we have launch template, if not create it.
Next we need create ASG with ALB and target group. (Don`t use the previous, create new)
![](assets/asg.png)
Choose configuration is needed.

Next create Spot Fleet Request with existing launch template.

![](assets/spot-instance.png)
![](assets/spot-temp.png)

After creating check it through public ip

![](assets/hw.png)

Then interrupt it.

Task ended!

### Don't forget to delete everything you've done.


