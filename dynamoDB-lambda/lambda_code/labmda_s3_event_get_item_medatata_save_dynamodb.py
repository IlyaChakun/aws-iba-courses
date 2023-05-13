import boto3

def lambda_handler(event, context):
    # Retrieve the S3 bucket and object key from the event
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']

    # Retrieve the metadata of the uploaded file
    s3_client = boto3.client('s3')
    metadata = s3_client.head_object(Bucket=bucket, Key=key)['Metadata']

    # Create a DynamoDB client
    dynamodb = boto3.client('dynamodb')

    # Define the DynamoDB table name
    table_name = 's3_bucket_metadata'

    # Prepare the item to be added to the DynamoDB table
    item = {
        'bucket': {'S': bucket},
        'key': {'S': key},
        'metadata': {'M': {k: {'S': v} for k, v in metadata.items()}}
    }

    # Put the item into the DynamoDB table
    response = dynamodb.put_item(
        TableName=table_name,
        Item=item
    )

    # Return the response
    return response

