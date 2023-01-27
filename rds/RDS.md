#RDS
So, lets create our database with the following settings:
![img.png](db_settings_1.png)
![img_1.png](db_settings_2.png)
![img_2.png](db_settings_3.png)
![img_3.png](db_settings_4.png)
![img_4.png](db_settings_5.png)

And after just a few minutes its available:
![img_5.png](db_available.png)
Now lets go to any db tool you like, I will use Data Grip from jetbrains.

To connect just pass host from Connectivity & security and User&Pwd that we set before
![img_7.png](connection_check.png)

_!NOTE: your security group must **allow** inbound on port **5432**!_
![img_9.png](security_group.png)
Now lets create table, add some info and check if it worked:


```
CREATE TABLE user_table
(
    Id        INTEGER PRIMARY KEY,
    FirstName VARCHAR(45),
    LastName  VARCHAR(45)
);

insert into user_table(Id, FirstName, LastName)
VALUES (1, 'first', 'last');

select *
from user_table
```
![img_12.png](query_run_1.png)

Now lets create read replica, go **Actions > Create read replica**:

![img_13.png](replica_option.png)

Settings are pretty much the same, just name it database-1-read-replica, make sure its publicly accessible

To make sure lets read everything from our table in our replica:
![img_14.png](query_run_2.png)
But if we will try to write, we will get this:
![img_15.png](query_run_3.png)

Now lets promote our replica to a standalone db, just go **Actions > Promote**

And now its an instance:
![img_16.png](replica_instance.png)

To prove it, now our db accepts writes:
![img_17.png](query_run_4.png)

Now lets delete our db, but with possibility to restore it from snapshot, for this you may either create snapshot by your own
(just go **Actions > Take snapshot**), or select this on deletion:
![img_18.png](final_snapshot.png)

Now lets delete our db
![img_19.png](succ_deleted.png)
And restore it from our snapshot, for this go **Snapshots > Actions > Restore Snapshot**, configurations
will be just the same as before, but lets call it database-1-restored.

Once its restored, lets try to connect there and see that we have all data that we had in original db
![img_20.png](db_endpoint.png)
![img_21.png](query_run_5.png)

And to promote db to bigger size, just go to **Modify** and choose any size you want


##RDS Multi-AZ + failover In custom VPC + Cloudwatch insights

First, create [VPC](../vpc-alb-ecs-ecr-cloudformation/vpc.md)

Then create MySql db instance, enable Multi-AZ and place it in our VPC:
![img_23.png](multy_az.png)
![img_22.png](private_connect.png)


As its in private subnet, we need to connect it to [ec2 instance](../ec2/ec2-practise-task.md) in this subnet

![img_24.png](connect_ec2.png)
![img_26.png](succ_connection.png)
```
mysql -u {username} -p'{password}' \
-h {remote server ip or name} -P {port} \
-D {DB name}
```
**no space after -p**
![img_25.png](connection_check_1.png)


Lets check our Multi-AZ, for this lets simulate failover, by rebooting (go **Actions -> Reboot**)
![img_29.png](reboot.png)
Before:
![img_27.png](reboot_before.png)
After:
![img_28.png](reboot_after.png)

To check Cloudwatch insights, we may just find our group in Insights console
![img_43.png](insights.png)

***Now lets create backup for our db***

![img_30.png](img_30.png)
For backup we have to create a job that will proceed it
![img_31.png](img_31.png)


![img_32.png](img_32.png)
And a backup plan
![img_33.png](img_33.png)
* Start with a template — You can create a new backup plan based on a template provided by AWS Backup. Be aware that backup plans created by AWS Backup are based on backup best practices and common backup policy configurations. When you select an existing backup plan to start from, the configurations from that backup plan are automatically populated for your new backup plan. You can then change any of these configurations according to your backup requirements.
* Build a new plan — You can create a new backup plan by specifying each of the backup configuration details, as described in the next section. You can choose from the recommended default configurations.
* Define a plan using JSON - You can modify the JSON expression of an existing backup plan or create a new expression.


Next, lets create backup vault:
![img_34.png](img_34.png)

And finally create our plan:
![img_35.png](img_35.png)
Now we need teo assign resources to our plan, we can choose everything, but just our db will be enough:
![img_36.png](img_36.png)

Now lets restore our db.

Navigate to the backup vault that was selected in the backup plan and select the latest completed backup.
![img_37.png](img_37.png)
And restore it
![img_38.png](img_38.png)
Next, configure it:
![img_39.png](img_39.png)
![img_40.png](img_40.png)

And now our db restored with no public access and without attached instance for connection
![img_41.png](img_41.png)
So, lets attach instance and connect to our db:
![img_42.png](img_42.png)
!SUGGESTION: you may insert data through this instance and try to find it again after backup by yourself! 