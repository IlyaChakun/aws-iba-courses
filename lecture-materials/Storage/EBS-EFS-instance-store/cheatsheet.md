# Comparison

## EBS (Elastic Block Store)

- **Persistent Block Storage:** Ideal for databases, application hosting.
- **Use Cases:**
    - Single-instance databases or applications.
    - Workloads requiring persistent storage with frequent read/write.
    - Situations where data must persist beyond the life of an EC2 instance.
- **Why:** High performance, customizable IOPS, and can be attached/detached from instances.

## EFS (Elastic File System)

- **Managed File Storage:** Perfect for shared access, scalable file storage.
- **Use Cases:**
    - Shared file storage for multiple EC2 instances.
    - Applications that require a file system interface and file system semantics.
    - Suitable for web serving, content management, data sharing, and more.
- **Why:** Automatically scales, supports NFS, and offers simple, scalable file storage in the AWS Cloud.

## Instance Store

- **Ephemeral Storage:** Temporary block-level storage, directly attached to the instance.
- **Use Cases:**
    - Temporary storage requirement like buffer, cache, scratch space.
    - Workloads that need high-performance hardware disk.
    - Situations where data is transient and not critical.
- **Why:** Offers low latency, high throughput, and is ideal for temporary data not requiring durability.
  """

# Details

## Amazon EBS (Elastic Block Store)

- Persistent block storage for EC2; suitable for databases, file systems.

## EBS Volume Types

- SSD (gp2, io1, io2) for IOPS intensive, HDD (st1, sc1) for throughput intensive workloads.

## EBS Snapshots

- Point-in-time backups of volumes; stored in S3, used for data durability.

## Encryption

- Supports encryption at rest using AWS Key Management Service (KMS).

## IOPS and Throughput

- Performance metrics; important for database and high-load applications.

## Amazon EFS (Elastic File System)

- Managed file storage for EC2; scalable, elastic, cloud-native NFS.

## EFS Use Cases

- Ideal for shared file storage, big data and analytics, web serving and content management.

## Performance and Scaling

- Automatically scales capacity; offers Standard and Infrequent Access storage classes.

## Security and Compliance

- Integrates with IAM, supports encryption at rest and in transit.

## Lifecycle Management

- Automatically moves files to cost-effective storage classes.

## Instance Store

- Temporary block-level storage; directly attached to the instance.

## Instance Store Use Cases

- Suitable for temporary storage, buffers, caches, scratch data.

## Data Durability

- Data lost if instance stops, terminates, or fails; not for persistent storage.

## Instance Store Performance

- High I/O performance; varies by instance type.

## EBS Multi-Attach

- Attach a single Provisioned IOPS SSD (io1/io2) volume to multiple instances; for clustered applications.

## EBS Volume Resizing

- Dynamically increase size, change volume type; online operations for flexible management.

## EFS Access Points

- Simplify file system access; manage application access in a shared environment.

## EFS Performance Modes

- General Purpose for latency-sensitive use cases; Max I/O for higher throughput and operations per second.

## EFS Throughput Modes

- Bursting and Provisioned; choose based on workload requirements and performance.

## EFS Backup Integration

- Integrate with AWS Backup; automate backup and recovery processes.

## Instance Store SSD vs HDD

- SSD for high IOPS, low latency; HDD for high sequential read/write operations.

## Instance Store Lifecycle

- Tied to the life of the instance; consider for workloads tolerant of potential data loss.

## Instance Store vs EBS

- Instance Store for temporary, high-performance; EBS for persistent and resilient storage needs.

## EBS Direct APIs

- Enables snapshots to be used for data analysis; access block-level data without restoring the volume.

## EBS Fast Snapshot Restore (FSR)

- Instantly restore snapshot data to volumes; eliminates latency to access the data.

## EFS File System Policy

- Manage NFS access and user permissions; control root directory access.

## EFS Infrequent Access Storage Class

- Cost-effective storage class for files accessed less frequently.

## EFS File Sync

- Fast, secure way to move files to EFS; sync from on-premises or other cloud sources.

## EBS vs EFS Costs

- EBS pricing based on provisioned capacity; EFS pricing on storage used and throughput mode.

## EBS vs EFS vs Instance Store Suitability

- EBS for durable, block storage; EFS for shared file systems; Instance Store for ephemeral, high-performance needs.

## EBS Optimization

- EBS-optimized instances for better performance; dedicated bandwidth for EBS volumes.

## EBS Throughput-Optimized HDD (st1)

- Magnetic storage, lower cost; for frequently accessed, throughput-intensive workloads.

## EBS Cold HDD (sc1)

- Lower cost HDD volume; for less frequently accessed data.

## EFS Elasticity

- Scales capacity up and down automatically; pay for what you use.

## EFS Data Deduplication

- Optimize storage efficiency; avoid storing duplicate data blocks.

## EFS Lifecycle Policies

- Customize policies for moving files; optimize costs based on access patterns.

## Instance Store Backed AMIs

- Create AMIs for instance-store backed instances; for applications requiring high-performance local storage.

## EBS Encryption-by-Default

- Automatic encryption for new EBS volumes; enhanced data security.

## EFS Encryption

- Support for encryption at rest and in transit; secure data with KMS keys.

## EFS Shared File Systems

- Multiple EC2 instances can access the file system; consistent performance and scalability.

## EBS Volume Cloning

- Create an exact replica of your EBS volume; faster and more efficient than copying snapshots.

## EBS Provisioned IOPS (io1/io2)

- Highest-performance SSD volumes; for I/O-intensive operations and databases.

## EFS Backup and Restore

- Integrate with AWS Backup; reliable and policy-based backup solutions.

## Instance Store Temporary Storage

- Suitable for temporary storage of information; data not intended to be permanent.

## EFS Scaling and Performance

- Automatically adjusts file system throughput; match workload demands without manual intervention.

## EBS Performance Metrics

- Monitor with CloudWatch; track IOPS, throughput, and latency.

## EBS Multi-Volume Attach

- Attach multiple EBS volumes to a single EC2 instance; increase storage capacity.

## EBS Volume Status Checks

- Monitor the status of your volumes; identify and troubleshoot potential issues.

## EBS-Optimized Instance Default

- Newer EC2 instances are EBS-optimized by default; enhanced performance.

## EFS Performance Tuning

- Optimize for specific use cases; adjust performance mode as needed.

## EFS Intelligent-Tiering

- Automatically moves data to the most cost-effective storage tier; based on access patterns.

## Instance Store NVMe

- NVMe instance store volumes for higher IOPS and throughput; for I/O intensive applications.

## EBS RAID Configuration

- Combine multiple EBS volumes into a RAID array; improved performance and redundancy.

## EFS POSIX Compliance

- Fully compliant with POSIX standards; ensures compatibility with existing applications.

## EBS vs EFS for Databases

- EBS for single-node databases; EFS for distributed file systems and shared databases.

## EFS Max I/O Performance Mode

- Optimize for high levels of aggregate throughput and operations; suitable for large, scale-out workloads.

## EBS Snapshot Lifecycle Policies

- Automate snapshot creation and deletion; manage backups efficiently.

## EFS Access Point Root Directory

- Specify a custom root directory for each access point; simplify access control.

## Instance Store Boot Volumes

- Boot EC2 instances from instance store; high performance but not persistent.

## EBS Volume Aggregation

- Combine multiple volumes for larger and more scalable storage solutions.

## EFS Concurrent Access

- Supports thousands of concurrent NFS clients; scalable access for multiple applications.

## EBS I/O Performance Tips

- Use provisioned IOPS and optimized instances; ensure high I/O performance.

## EFS Backup Solutions

- Utilize AWS Backup or EFS-to-EFS backup solutions; ensure data durability and recoverability.
