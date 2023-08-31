## KMS

#### KMS: S3 SS3 and KMS

* Encryption using SS3-S3:
* Upload document to S3 bucket and encrypt it using Server Side Encryption
* Encryption using S3-KMS: (do it with you admin User)
* Go to KMS, create symmetric key and encrypt new object in bucket
* Create a new user with permission only for S3 Read Access
* Try to get object with custom encryption
* After an error Grant test user access with KMS (add it in Key users list)

#### EBS Encryption

1. Unencrypted volume to encrypted volume

* via snapshot
* Restore with encryption

Flow:

* Create unecrypted volume
* Make a snapshot from it
* Create volume from this snapshot using Default master key
* Create volume using Copy with default master key
* Create another volume using your Key

2. Encrypted volume

* Snapshot
* Restore with encryption

Flow:

* Create an encrypted volume with Default MK
* Create new Customer Master Key
* Create a snapshot from EBS
* Create a shapshot and restore it using your CMK key

3. Shapshot use cases

* Copy using Different key
* Copy to another Region (think about Disaster recovery, how can it be used?)

FLow:

* Use previous snapshot from step 2
* As a part of Copy command select another region default master key
* Do the same use your own key (previously you need to create new Key in selected region)


4. Clear all ebs volumes and snapshots

#### KMS Automatic and Manual keys rotation

[Guide](https://aws.amazon.com/premiumsupport/knowledge-center/rotate-keys-customer-managed-kms/)

* Create new Symmetric key named old-key
* Create new Symmetric key named new-key
* Rotation should be done from command line
* aws kms list-aliases
* Old alias old-key should point on a new Key Id from new-key
* aws kms update-alias --alias-name <old-alias-name> --target-key-id <new-key-id>  --region <>

#### AWS Managed Keys are now automatically rotated every year (from an earlier three-year rotation interval). AWS made this change in May-2022.

[Link](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html)

#### Lambda + KMS

Goal: Create lambda function to decrypt and encrypt passed data using KMS Customer Key

Requirements:

* Key Name should be passed

### Optional

#### Create lambda function for automated AWS KMS key rotation

### Questions:

* How often AWS will refresh aws managed keys?
* Symmetric key: Key material diffs: KMS vs External vs Custom Key Store (CloudHSM))
* Single-Region Keys vs Multi-Region Keys
* what is HMAC (Hash-Based Message Authentication Code) Keys?
* How does key rotation work in kms?
* What is the difference between encrypting and signing in asymmetric encryption?

