# Global Accelerator

- EFS, EC2, ALB, TG, Global Accelerator, Route53
  - Create a deployment for 2 ALBs with TG, EC2 instances in different regions using Global Accelerator
  - You can test via IP address from Global Accelerator or Add route53 record and test via dns
  - Show the failover case (when one of the region went down)
  - Draw Deployment Schema

# CloudFront

## Introduction to Amazon CloudFront

### Create S3 Bucket

1. Ensure you are in the US East (N. Virginia) us-east-1 Region.
2. Navigate to the Services menu at the top, click on S3 in the Storage section.
3. In the S3 dashboard, click on Create bucket and fill in the bucket details:
    - Bucket name: Enter unique
    - AWS Region: Select US East (N. Virginia) us-east-1
    - Object Ownership: Select ACLs enabled option and choose Object writer as Object owner
4. Scroll down to Block Public Access settings for this bucket and Uncheck the Block all Public Access and acknowledge
   the change.
5. Click on the Create bucket button.

### Upload a file to an S3 bucket

1. Click on the bucket name you just created.
2. Click on the Upload button.
3. Click on Add files.
4. Browse for your local image
5. Click on the Upload button.

### Creating Custom Error Pages

1. Access the S3 bucket by clicking on it.
2. Click on Create Folder button and create a folder with the name CustomErrors
3. Select Server-side encryption as Amazon S3-managed keys (SSE-S3).
4. Click on the Create folder button.
5. Click on the new CustomErrors folder.
6. Create an `error.html` file in your local system using Notepad with `<html><h1>This is Error Page</h1></html>` as
   content and upload to the folder.
7. Create a `block.html` file in your local using Notepad
   with `<html><h1>This content is blocked in your location!!!</h1></html>` as content and upload to the folder.

### Making the objects public

1. Click on the image name. You can see the image details like Owner, size, link, etc.
2. Copy the Object URL and paste it into a new tab.
3. Go back to the Bucket and click the Permissions tab.
4. Scroll down to the Bucket Policy and click on Edit button.
5. Copy and paste the below policy and save the policy. Don't forget to change the bucket ARN with your bucket ARN in
   the Resource option in the code.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Principal": {
        "AWS": "*"
      },
      "Resource": "<YOUR_BUCKET_ARN>"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Principal": {
        "AWS": "*"
      },
      "Resource": "<YOUR_BUCKET_ARN>/*"
    }
  ]
}
```

### Creating a CloudFront Distribution

1. Navigate to CloudFront by clicking on the `Services` menu at the top, then click on `CloudFront` in
   the `Network and Content Delivery` section.
2. Click on `Create a CloudFront distribution` button.
3. Configure distribution as follows:
    - **Origin Domain Name:** On click of input space, Select your S3 bucket: `[bucket-name].s3.us-east-1.amazonaws.com`
    - Choose `Do not enable security protections` under `Web Application Firewall(WAF)`.
4. Leave everything as default, scroll down, and click on the `Create distribution` button.
5. Note the domain name that Amazon CloudFront assigns to your distribution appears in the list of distributions.

### Accessing Image through CloudFront

1. Copy your domain name and append your image name after the domain name.
2. Open the CloudFront URL in a new tab. You can see your uploaded image.

### Configuring Custom Error Page

1. Navigate back to `CloudFront Dashboard` and select the distribution created.
2. Select the `Error pages` tab.
3. Click on the `Create custom error response` button.
4. Set up your custom error page as follows:
    - **HTTP Error Code:** Select `404: Not Found`
    - **Error Caching Minimum TTL:** Enter `10`
    - **Customize Error Response:** Select `Yes`
    - **Response Page Path:** Enter `/CustomErrors/error.html`
    - **HTTP Response Code:** Select `404: Not Found`
5. Click on `Create custom error response` button.
6. Once the state has been changed to `Deploy`, test the error page by entering the URL of an image that does not exist
   in your S3 bucket with the CloudFront domain name.

### Restricting the Geographic Distribution of Your Content

1. On the distribution settings page, select `Geographic locations` tab and click on `Edit` button.
2. Configure as follows:
    - **Restriction Type:** Select `Block list`
    - Select the country where you are currently and click on it to check this option.
3. Click on `Save changes` button.
4. Go to the distribution list and wait for your distribution to complete the state changed to `deployed`.
5. Once the state has been changed to `deployed`, test the restriction through CloudFront in the browser.
6. Configure a custom error page for 403 Forbidden error:
    - **Http Error Code:** Select `403: Forbidden`
    - **Error Caching Minimum TTL:** Enter `10`
    - **Customize Error Response:** Select `Yes`
    - **Response Page Path:** Enter `/CustomErrors/block.html`
    - **HTTP Response Code:** Select `403: Forbidden`
7. Click on `Create custom error response` button.
8. Once the state has been changed to `Deploy`, test the restriction through CloudFront in the browser.

## Understanding CloudFront Origin Groups

### Make the objects publicly accessible

1. Click the `Permissions` tab to configure your bucket.
2. In the Permissions tab, Edit the `Bucket Policy`.
3. You will see a Blank policy editor.
4. Copy the ARN (Amazon Resource Name) of your bucket to the clipboard. It is displayed at the top of the policy editor.
   It looks like ARN: `arn:aws:s3:::your-bucket-name`.
5. Update the bucket ARN on the `Resource` key-value in the policy below and copy the policy code.
6. Click on `Save changes`.

Here's the bucket policy:

```json
{
  "Id": "Policy1",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "replace-this-string-with-your-bucket-arn/*",
      "Principal": "*"
    }
  ]
}
```

### Creating CloudFront Distribution

1. Select `CloudFront` under Networking and Content Delivery from the Services menu.
2. Navigate to the left side and select `Distributions` tab.
3. Click on the `Create distribution` button.
4. Configure distribution as follows:
    - **Origin Domain Name**: On click of input space, select your S3
      bucket: [name]
    - For `Web Application Firewall (WAF)` select `Do not enable security protections`.
5. Keep rest things as default, scroll down and click on the `Create Distribution` button.
6. After 10–15 minutes, you can see the `Deploying` status changed and the last modified time is present. The domain
   name that Amazon CloudFront assigns to your distribution appears in the list of distributions.
7. Copy and paste the domain of CloudFront distribution in the new tab of your browser and add `/index.html` in the URL.
   It should display the index.html page present in the S3 bucket.

### Launching an EC2 Instance

* Create Ec2 with SG for port 80 from anywhere
* Userdata:

```bash
#!/bin/bash
yum update -y           
yum install -y httpd        
systemctl start httpd           
systemctl enable httpd          
echo "<h1>Hello, this index.html page from $(hostname -f)</h1>" > /var/www/html/index.html
chmod 644 /var/www/html/index.html
echo "<h1>Hello, this index2.html page from $(hostname -f)</h1>" > /var/www/html/index2.html
chmod 644 /var/www/html/index2.html
systemctl restart httpd         			
```

### Add EC2 as the Origin and create Origin Group

1. Before adding EC2 Instance as Origin, make sure CloudFront distribution is having `Enabled` status.
2. Once the CloudFront distribution is having `Enabled` status, click on the `ID` to add the origin.
3. Switch to the `Origins` tab and click on the `Create origin` button.
4. In the first option `Origin domain`, paste the copied Public IPv4 DNS of EC2 Instance. All the details of the Origin
   domain will be listed below.
5. For `Protocol`, select `HTTP Only`. Keep all the options as default and click on the `Create origin` button.
6. Now there are two origins present.
7. Go back to the `General` tab, you will see these changes are getting deployed. Wait for 5-10 minutes until you see
   the `Deploying` status changes and the `Last modified` time is present.
8. Switch to `Origins` tab and scroll below and click on the `Create origin group` button.
9. Select the Public IPv4 DNS of EC2 Instance and click on the `Add` button.
10. Similarly, select the S3 Bucket endpoint and click on the `Add` button.
11. Once both the Origins are added, give a name as `dev-Origin-Group` in the next field.
12. For the failover criteria, Select `404 Not found` error code present.
13. Once done, click on the `Create origin group` button. The Origin group is now created.
14. Go back to the `General` tab, you will see these changes are getting deployed. Wait for 5-10 minutes until you see
    the `Deploying` status changes and the `Last modified` time is present.
15. Now Switch to the `Behaviors` tab. Select the present behavior and click on the `Edit` button.
16. On the `Edit behavior` page, for the `Origin and origin groups` option, select the present Origin Group
    i.e. `dev-Origin-Group` from the dropdown.
17. In `Cache key and origin requests`, select `CashingOptimized`.
18. Scroll to the end of the page and click on the `Save changes` button. The default cache behavior is now updated to
    the Origin group.
19. Go back to the `General` tab, you will see these changes are getting deployed. Wait for 5-10 minutes until you see
    the `Deploying` status changes and the `Last modified` time is present.
20. Now you can test the origin group.

### Test the Origin group

1. Copy the Distribution domain name and paste it into the new tab of your browser. This should now display the
   index.html page from EC2 Instance as it has the Private IP DNS name.
2. Now add `/index.html` into the URL. This displays the contents of the index.html file present in the S3 Bucket.
3. Now update the URL by changing `/index.html` to `/index2.html`.

-------------------

## Understanding Lambda@Edge

### Create a S3 Bucket

In this task, we will create a S3 bucket with the required configurations like name, object ownership and other details.

* In the left menu, choose `Buckets`, click `Create bucket` button and fill in the bucket details.
    - `Bucket Name`: Enter `edge-bucket-RANDOMNUMBER`. Replace `RANDOMNUMBER` with any Random Number
    - `Object ownership`: Select `ACLs enabled` option and choose `Object writer`.
    - `Block Public Access settings for this bucket`: Uncheck the option, `Block all public access` and select the check
      box option of Acknowledgment.
    - Leave other settings as default and click on the `Create bucket` button.

### Upload objects and make them public

In this task, we will upload the objects in the S3 bucket and make them public.

* Upload two html files
* Click on the `Object actions` button and click the last option `Make public using ACL` in the dropdown list.
* Click on the `Make public` button and then click on `Close`.
* Repeat steps 7 to 9 to make the second html file `user.html` also public.

### Create a Lambda function

* Choose `Author from Scratch`.
    - `Function name`: Enter `edge_lambda`.
    - `Runtime`: Select `Python 3.8`.
    - `Permissions`: Click on `Change default execution role` and choose `Use an existing role`.
    - `Existing role`: Select `myEdgeLambdaRole.<RandomNumber>` IAM Role from the list.
* Code:

```
import json
 
def lambda_handler(event, context):
    request = event['Records'][0]['cf']['request']
    headers = request['headers']
 
    if request['uri'] == '/index':
        request['uri'] = '/index.html'
        return request
    elif request['uri'] == '/pavel':
        request['uri'] = '/pavel.html'
        return request
    else:
        return request
```

### Create a Lambda version

1. Navigate to the `Versions` tab above the source code and click on the `Publish new version` button.
2. Click on the `Publish` button.
3. Once your lambda function’s version: 1 is created, copy the version: 1 ARN and place it in your text editor.

### Create an Amazon CloudFront distribution

1. Navigate to CloudFront by clicking on the Services menu at the top, then click on CloudFront in the Networking &
   Content Delivery section.
2. Click on the `Create a CloudFront distribution` button.
3. Fill in the following:
    - `Origin Domain Name`: Select the S3 bucket that you created.
    - `Cache and origin request settings`: Select `legacy cache settings`.
    - `Object Caching`: Select `Customize`.
    - `Maximum TTL`: Enter `10`.
    - `Default TTL`: Enter `6`.
    - Under `Function Associations` and `Origin request`, `Function type`: Select `Lambda@Edge` and paste the Lambda
      Version ARN that you copied.
    - Scroll down to `Web Application Firewall(WAF)`: Select `Do not enable security protections`.
4. Click on the `Create Distribution` button.
5. Wait until the `Last modified` status gets changed. It may take 5 to 7 minutes to complete the deployment.

### Test the distribution

1. Click on the Distribution name, Copy the CloudFront distribution Domain name and paste it in the browser and
   hit [ENTER].
2. Now add `/site/admin/` along with the domain name. The syntax is `<CloudFront Distribution Domain name>/site/admin/`.
