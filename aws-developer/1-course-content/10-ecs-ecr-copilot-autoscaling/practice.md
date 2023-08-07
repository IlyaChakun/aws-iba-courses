# ESC & ECR

#### Deploy web application using ECS Based on Ec2 & Fargate

1. Deploy ECS task using EC2
    1. (You can test it via public ip address and create task directly without a service)
2. Deploy ECS Task using Fargate
    1. Deploy using ECS Service based on Fargate
    2. Create custom VPC
    3. Create ECR repo
    4. Push docker image of java web application
    5. Create an alb and target group
    6. Create ECS cluster
    7. Create task definition
    8. Create ecs service inside cluster
    9. Run 2 task
    10. Test it via alb dns name.
    11. Create route53 alias for ALB.
    12. Test it via alias
    13. Turn on CloudWatch Insight
        1. _Note_: after cluster was created it can be done only via command line. [Link](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/deploy-container-insights-ECS-cluster.html)

#### Create the same setup as above for ECS using Cloudformation

Note. route53 should be set manually


#### Create an autoscaling process for ECS

Goal: You need to add Step scaling as a first step, second step would be Scheduling scaling

* Add manual Target scaling policy to your ECS cluster (you can use your cloudformation from previous tasks)
* Add Step scaling policy for your ECS cluster
* Add scheduling scaling policy to your cluster
* Add a Step scaling policy via Cloudformation. Deploy and test it using k6. Take a look on a cloudwatch
* Add Scheduling scaling policy via cloudformation as a **second** scaling.
