# Task with ECR, ECS, ALB.

### Create ECR repo

![](pictures/ecr-create-repo.png)

### Push docker image of java web application.

You need to create java web-app.
Then create docker image and push it to ECR.(You can see the commands in aws)
And you can see the Docker Image on the screen.

![](pictures/ecr-push-commands.png)

### Create alb and target group

в ес2 можно без алб и таргет группу.

в фаргейте сделать через алб и тг.

--------

### Create ECS cluster(in this case we create Cluster with EC2)

Everything is quite simple, we go to the ECS, click on Clusters and Create Clusters.

![](pictures/create-cluster.png)

![](pictures/create-cluster-linux.png)

Keep default settings

- Provisioning Model : On-Demand Instance.
- EC2 instance type : t2.micro

![](pictures/created-cluster.png)

### Create task definition (Choose EC2)

![](pictures/create-taskdefinition.png)

- Network mode : default
- Container definitions:
- - Click on (Add container), enter a name, select your image
- - Memory Limits : Hard-256
- - Port mappings : Host - 0, container - (your port)

Don`t touch - Advanced container configuration

![](pictures/taskdefinition-settings.png)







![](pictures/.png)
![](pictures/.png)
![](pictures/.png)
![](pictures/.png)
![](pictures/.png)


### Create ECS cluster(in this case we create Cluster with Fargate)

Notes : 
- First of all, I recommend create ALB, target group and security group in the beginning.
- For this task you need two SG, the first for our ALB (we open 80 port) and the second for our container(for me its 8000)

Let`s do it.

СЮДА ВСТАВИТЬ СОЗДАНИЕ АЛБ И ТАРГЕР ГРУППЫ.

Enter the cluster name and click create
![](pictures/create-fargate-cluster.png)
![](pictures/create-fargate-cluster1.png)

Then you need to create Task Definition with fargate launch type.
You also need create Role for ECS!

![](pictures/create-fargate-taskdefinition.png)
![](pictures/create-task-def.png)

Leave the default settings except :
Task size - choose the smallest size

![](pictures/task-size.png)

Then add your container.
![](pictures/add-container.png)

Then try launch it.
Go in your cluster, click on it.

As you can see, we havn`t any running services.
![](pictures/running-cluster.png)
Let's run it.

Click on blue botton (Create)

Then you need configure it.
![](pictures/service-run-1.png)

![](pictures/service-run-2.png)

![](pictures/service-run-3.png)


In step 2 choose vpc,2 private subnets, you need create security group for your container.(If you already have,just take it)
![](pictures/service-run-4.png)
I have created the SG and chose it.
![](pictures/service-run-5.png)

Then you need load balancer.(How to create a load balancer and target group was described above.)
![](pictures/service-run-6.png)

![](pictures/service-run-7.png)

![](pictures/service-run-8.png)

Click next and create.

And now, we can see our Service

![](pictures/service-run-9.png)

Click on the service name, then click on Tasks.

We have two our tasks and now we`ll check it.

![](pictures/service-run-10.png)

We go to our load balancer, copy the DNS name and paste it as a URL.

![](pictures/service-run-11.png)

It's working! (for my web-app I need check this path : /api/v1/users , may differ from yours)

![](pictures/service-run-12.png)