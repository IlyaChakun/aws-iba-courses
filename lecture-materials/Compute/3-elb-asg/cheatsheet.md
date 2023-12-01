## Elastic Load Balancing (ELB) Overview

- Automatically distributes incoming application traffic across multiple targets.

## Types of Load Balancers

- Application Load Balancer (ALB), Network Load Balancer (NLB), Classic Load Balancer (CLB).

## Application Load Balancer (ALB)

- Best for HTTP/HTTPS traffic; advanced request routing, targeting at the application layer.

## Network Load Balancer (NLB)

- High performance for TCP, UDP, and TLS traffic; handles millions of requests per second.

## Classic Load Balancer (CLB)

- Simple load balancing for applications built within the EC2 classic network.

## Load Balancer Protocols

- HTTP, HTTPS, TCP, TLS, UDP; based on load balancer type.

## High Availability

- Operates across multiple Availability Zones; ensures fault tolerance.

## Health Checks

- Checks the health of the targets; routes traffic only to healthy instances.

## SSL/TLS Offloading

- Handles SSL/TLS decryption, reducing the load on application servers.

## Sticky Sessions

- Routes requests from the same client to the same target; maintains session state.

## Path-Based Routing (ALB)

- Routes traffic based on URL path; advanced request routing.

## Port-Based Routing (NLB)

- Routes traffic based on the port number; multiple services on a single EC2 instance.

## Cross-Zone Load Balancing

- Distributes traffic evenly across all registered instances in all enabled Availability Zones.

## Elastic IP Support (NLB)

- Assign one Elastic IP address per Availability Zone; static IP for your load balancer.

## Connection Draining

- Deregister instances without disrupting ongoing requests; graceful removal.

## Access Logs

- Store detailed information of requests made to your load balancer; useful for analysis.

## Security Groups

- Control the traffic allowed to and from your load balancer.

## Integration with AWS Services

- Works seamlessly with EC2, ECS, Auto Scaling, CloudFormation, etc.

## AWS WAF Integration (ALB)

- Protect applications from common web exploits.

## Load Balancer Pricing

- Based on type, usage, and additional features like ELB Capacity Units (LCU).