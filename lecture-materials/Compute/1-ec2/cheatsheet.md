# AWS EC2 Overview

**Elastic Compute Cloud**: Provides scalable virtual servers.

## Instance Types

- General Purpose
- Compute Optimized
- Memory Optimized
- Storage Optimized

Based on workload needs.

## EBS Volumes

**Elastic Block Store**: Persistent, block-level storage for EC2 instances.

## AMI (Amazon Machine Image)

Pre-configured templates for EC2 instances; OS, software, settings.

## Security Groups

Virtual firewalls; control inbound and outbound traffic for instances.

## Elastic IP Addresses

Static, public IP address; associated with AWS account.

## Key Pairs

Secure login information for instances; public and private key pairs.

## Instance Store

Temporary, ephemeral storage; data lost on stop/restart.

## VPC Integration

Launch instances

## Spot Instances

Bid for unused EC2 capacity; lower costs for flexible start and end times.

## Reserved Instances

Significant discount on hourly charge; commitment to specific instance type.

## Dedicated Hosts

Physical server with EC2 instance capacity; address compliance requirements.

## Placement Groups

Control EC2 instance placement; strategies like Cluster, Spread, Partition.

## Elastic Network Interfaces (ENI)

Virtual network interface for EC2 instance; multiple IP addresses.

## Amazon EFS Integration

Mount Elastic File System on EC2; scalable file storage.

## Monitoring and Management

- CloudWatch for metrics and monitoring
- CloudTrail for API call tracking.

## Elastic GPUs

Attachable GPU resources for graphics acceleration; flexible compute workloads.

## Instance Lifecycle

- On-demand
- Reserved
- Spot
- Dedicated host

Choose based on cost and availability.

## EC2 Savings Plans

Flexible pricing models; reduced costs in exchange for a specific usage commitment.

## Hibernation

Pause and resume EC2 instances; maintain instance state.

## Amazon EC2 Fleet

Manage thousands of instances; optimal combination of On-Demand, Reserved, and Spot Instances.

## EBS Snapshots

Back up data on EBS volumes; point-in-time, incremental backups.

## EBS Volume Types

- SSD (General Purpose GP2, Provisioned IOPS IO1)
- HDD (Throughput Optimized ST1, Cold HDD SC1)

Balance performance and cost.

## EC2 Instance Metadata

Retrieve data about instances; user data scripts, network configuration.

## AWS Nitro System

Underlying platform for EC2 instances; enhanced security, networking, and storage.

## User Data

Automate software installations and configurations on instance launch.

## Amazon Machine Learning and EC2

Utilize EC2 instances for ML tasks; leverage GPU instances for higher performance.

## EC2 Launch Templates

Save configurations for launching instances; ensure consistency and simplify launching.

## Elastic Fabric Adapter (EFA)

Network device for EC2 instances; high-performance computing and ML applications.

## AWS Batch

Efficient batch computing; integrates with EC2 and other AWS services.

## IPv6 Support

Full IPv6 support for EC2 instances; global, unique IP address per instance.

## Enhanced Networking

Higher bandwidth, lower latency; requires specific instance types and OS support.

## Amazon Time Sync Service

Time synchronization service for EC2 instances; utilize NTP protocol.

## EC2 Capacity Reservations

Reserve capacity for EC2 instances in a specific Availability Zone for any duration.

## EC2 Instance Connect

Secure way of connecting to instances; provides SSH access to EC2 instances.

## Amazon Lightsail

Easy-to-use cloud platform; offers bundles of compute power and storage for simple applications.

## EC2 Serial Console

Troubleshoot boot and network configuration issues; direct access to the instance console output.

## EC2 Dedicated Instances

Instances running on hardware dedicated to a single customer; isolation for compliance needs.

## Multiple Network Interfaces

Multiple private IP addresses per instance; suitable for network appliances, load balancing.

## Instance Status Checks

Monitor system and instance health; quickly identify hardware and software issues.

## Amazon VPC Traffic Mirroring

Mirror network traffic from EC2 instances; use for content inspection, threat monitoring.

## Elastic GPUs vs EC2 GPU Instances

Understand differences; Elastic GPUs for graphics acceleration, EC2 GPU Instances for compute-intensive tasks.

## AWS Marketplace for EC2

Pre-configured AMIs from AWS Marketplace; software, applications pre-installed.

## EC2 Instance Types for Different Workloads

Choose based on memory, CPU, storage, networking capacity; match instance type with application needs.

## AWS Graviton Processors

Custom-built AWS processors; power performance at lower costs for specific EC2 instances.

## EC2 Image Builder

Automate the creation, management, and deployment of AMIs.

## AWS Compute Optimizer

Recommends optimal AWS resources; based on usage patterns for better performance and lower costs.

## Amazon EC2 Mac Instances

Instances that run macOS; suitable for building, testing, signing, and deploying Apple apps.

## EC2 Instance Storage-Optimized Instances

High-performance instances for workloads requiring high, sequential read and write access to large data sets on local
storage.

## Amazon EC2 Inf1 Instances

Instances featuring AWS Inferentia Chips; optimized for machine learning inference applications.

## AWS License Manager Integration

Manage, discover, and report software licenses; avoid over-provisioning.

## AWS Wavelength

Deploy applications to 5G networks; minimal latency for mobile and connected devices.

## AWS Outposts

Run EC2 instances on-premises; consistent hybrid experience.

## Amazon EC2 C6g, M6g, and R6g Instances

Powered by AWS Graviton2 Processors; ideal for performance-sensitive workloads.

## Amazon EC2 Bare Metal Instances

Physical server with direct access to the processor and memory of the underlying server.

## Elastic Inference

Add GPU-powered inference acceleration to EC2 instances; cost-effective deep learning inference.

## Amazon EC2 Auto Recovery

Automatic recovery feature for instances; recover from instance failures.

## Amazon EC2 Spot Fleet

Manage thousands of Spot Instances; simple and cost-effective way to manage a fleet of instances.
