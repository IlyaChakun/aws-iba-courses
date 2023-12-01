## Auto Scaling Group Overview

- Manages a collection of EC2 instances; automatically scales them based on defined conditions.

## Launch Configurations/Templates

- Defines the setup of EC2 instances in the group; includes instance type, AMI, key pairs, security groups.

## Scaling Policies

- Rules that trigger scaling actions; can be based on conditions like CPU utilization, network usage.

## Health Checks

- Monitors the health of instances; replaces unhealthy ones automatically.

## Desired, Minimum, and Maximum Capacity

- Specifies the target size, lower, and upper limits of the Auto Scaling group.

## Cooldown Period

- A pause after a scaling activity to prevent additional scaling activities from starting too soon.

## Scheduled Scaling

- Automatically scales the group based on the scheduled time; useful for predictable load changes.

## Dynamic Scaling

- Responds to changing demand; uses scaling policies based on real-time metrics.

## Lifecycle Hooks

- Custom actions before instances launch or terminate; useful for graceful deployments or shutdowns.

## Elastic Load Balancer Integration

- Distributes incoming traffic across instances in the group; enhances fault tolerance.

## Availability Zones

- Spreads instances across multiple zones; increases availability.

## Spot Instances Integration

- Leverages cost-effective Spot Instances in the group; reduces costs.

## Scaling Activity Logs

- Records details of scaling activities; useful for auditing and troubleshooting.

## Instance Refresh

- Gradually replaces instances with new ones; ensures instances are based on updated criteria.

## Termination Policies

- Defines the order in which instances are terminated during scale in; optimizes for cost, performance.

## Standby State

- Temporarily removes instances from scaling activities; useful for updates or troubleshooting.

## Multi-AZ Deployments

- Distributes instances across different AZs; ensures high availability.

## Cost Management

- Scales capacity to manage costs; use with budgeting and cost management tools.
