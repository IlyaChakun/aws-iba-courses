How to create cicd ws beanstalk:

NOTE: get credentials in IAM for codecommit

First we need to create beansalk itself, for this just navigate in AWS  for Beanstalk and create application:
![img_8.png](assets/create_beanstalk_name.png)
![img_9.png](assets/create_beanstalk_platform.png)
And in a few minutes its done
![img_10.png](assets/create_beanstalk_result.png)
Now lets move to our pipeline, navigate to CodePipeline and create new pipeline
![img_11.png](assets/create_pipeline_basic_settings.png)
As a source we will choose codecommit as it's our provider and the repository we just created
![img_12.png](assets/create_pipeline_source.png)
For build part we added buildspec.yml file in our repository, so lets configure build step


![img.png](assets/create_build_project_name.png)
For environment we may use just Ubuntu 
![img_1.png](assets/create_build_project_system.png)
We could create buildspec right here, but we already have it, so just go on
![img_2.png](assets/create_build_buildspec.png)
![img_3.png](assets/create_pipeline_choose_build.png)
And deploy to our beanstalk environment
![img_4.png](assets/create_pipeline_choose_deploy.png)

And after all this just run our pipeline and thats it :)
![img_5.png](assets/pipeline_result_source_build.png)
![img_6.png](assets/pipeline_result_deploy.png)



For scenario with simple EC2:

NOTE: Unlike with beanstalk, here all we have is a clear Ubuntu, 
so we have to install codedeploy  agen and specify appspec.yml for deployment process with deployment scripts

* First create role for ec2 and ec2 as before:
Open the IAM console at https://console.aws.amazon.com/iam/).

* From the console dashboard, choose Roles.

* Choose Create role.

* Under Select type of trusted entity, select AWS service. Under Choose a use case, select EC2. Under Select your use case, choose EC2. Choose Next: Permissions.

* Search for and select the policy named AmazonEC2RoleforAWSCodeDeploy.

* Search for and select the policy named AmazonSSMManagedInstanceCore. Choose Next: Tags.

* Choose Next: Review. Enter a name for the role (for example, EC2InstanceRole).

Connect to ec2 instance as before and install codedeploy agent there:
On Ubuntu Server 14.04, enter the following commands, one after the other:

```
sudo apt-get update

sudo apt-get install ruby2.0

sudo apt-get install wget
```

On Ubuntu Server 16.04 and later, enter the following commands, one after the other:
```
sudo apt update

sudo apt install ruby-full

sudo apt install wget
```

Enter the following command:

```

wget https://bucket-name.s3.region-identifier.amazonaws.com/latest/install
```
aws-codedeploy-us-east-2 for instances in the US East (Ohio) region etc...

```

wget https://aws-codedeploy-us-east-2.s3.us-east-2.amazonaws.com/latest/install
```
Enter the following command:

```
chmod +x ./install
```

To install the latest version of the CodeDeploy agent on Ubuntu 14.04, 16.04, and 18.04:

```
sudo ./install auto
```
To install the latest version of the CodeDeploy agent on Ubuntu 20.04:
```
sudo ./install auto > /tmp/logfile
```

To check that the service is running

Enter the following command:

```
sudo service codedeploy-agent status
```
If the CodeDeploy agent is installed and running, you should see a message like The AWS CodeDeploy agent is running.

If you see a message like error: No AWS CodeDeploy agent running, start the service and run the following two commands, one at a time:

```
sudo service codedeploy-agent start

sudo service codedeploy-agent status
```

Then, create role for codedeploy:

* Open the IAM console at https://console.aws.amazon.com/iam/).

* From the console dashboard, choose Roles.

* Choose Create role.

* Under Select trusted entity, choose AWS service. Under Use case, choose CodeDeploy. Choose CodeDeploy from the options listed. Choose Next. The AWSCodeDeployRole managed policy is already attached to the role.

* Choose Next.

* Enter a name for the role (for example, CodeDeployRole), and then choose Create role.

Then create aplication in codeDeploy:

* Open the CodeDeploy console at https://console.aws.amazon.com/codedeploy.

* If the Applications page does not appear, on the menu, choose Applications.

* Choose Create application.

* In Application name, enter name of our application.

* In Compute Platform, choose EC2/On-premises.

* Choose Create application.



![img_7.png](assets/create_deploy_application.png)

After this create a deployment group:

* On the page that displays your application, choose Create deployment group.

* In Deployment group name, enter MyDemoDeploymentGroup.

* In Service role, choose the service role you created earlier (for example, CodeDeployRole).

* Under Deployment type, choose In-place.

* Under Environment configuration, choose Amazon EC2 Instances. In the Key field, enter Name. In the Value field, enter the name you used to tag the instance (for example, MyCodePipelineDemo).

* Under Agent configuration with AWS Systems Manager, choose Now and schedule updates. This installs the agent on the instance. The Linux instance is already configured with the SSM agent and will now be updated with the CodeDeploy agent.

* Under Deployment configuration, choose CodeDeployDefault.OneAtaTime.

* Under Load Balancer, make sure Enable load balancing is not selected. You do not need to set up a load balancer or choose a target group for this example.

* Choose Create deployment group.


Now just setup the pipeline just like before, except for codedeploy step:
![img_8.png](assets/configure_codedeploy_ec2.png)

And after run pipeline everything shoukd be ok
![img_9.png](assets/codedeploy_ec2_result.png)