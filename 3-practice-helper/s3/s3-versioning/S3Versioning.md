#S3 versioning

First, lets create our S3 bucket and enable versioning there
![img_2.png](assets/bucket_creation.png)

![img_1.png](assets/versioning_enable.png)

And lets create simple txt file

![img_3.png](assets/txt_sample.png)

And upload it's to S3
![img_4.png](assets/upload_txt.png)

Lets upload one more file
![img_5.png](assets/upload_another_txt.png)

And lets upload our first file but with new content
![img_7.png](assets/sample_txt_vers_2.png)
![img_6.png](assets/sample_txt_2_upload.png)

Now we have 2 versions of our file
![img_8.png](assets/versioning_check.png)



#BACKUP 

Firstly lets enable backup in properties
![img_9.png](assets/versining_backup_enable.png)

Next lets choose life cycle configuration to save our wallets:)
Under Management > Life Cycle Configuration, add a new rule. 
![img_13.png](assets/life_cycle_config.png)
![img_14.png](assets/life_cycle_config_2.png)

Now lets create replication rule
![img_18.png](assets/replication_rule_creation.png)
Then choose our target bucket
![img_17.png](assets/target_replica_bucket.png)
Choose IAM role for it
![img_19.png](assets/replica_role_choose.png)

Replicate current objects
![img_20.png](assets/replicate_obj.png)

Set up replication job
!NOTE: here we use our replicated bucket as a report destination as well, but its better to have another one for this!
![img_21.png](assets/job_settings.png)


![img_22.png](assets/replicated_bucket_poc.png)




#ENCRYPTION

To set up server-side s3 encryption in general we just need to enable it under properties > encryption
![img_23.png](assets/enable_default_s3_encription.png)

To enable KMS-managed encryption, just enable it 
![img_24.png](assets/enable_kms_managemrnt_encr.png)

We can choose either aws-managed KMS or create it by our own:
![img_25.png](assets/encryption_settings.png)

Now lets configure our KMS key:
![img_26.png](assets/kms_key_configure.png)
![img_27.png](assets/kms_labels.png)
Add who can manage this keys

And that's it
![img_28.png](assets/edit_default_encryption.png)



