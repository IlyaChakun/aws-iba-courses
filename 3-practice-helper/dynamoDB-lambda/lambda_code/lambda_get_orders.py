import boto3

def lambda_handler(event, context):
    # Create a DynamoDB client
    dynamodb = boto3.client('dynamodb')

    # Define the DynamoDB table name
    table_name = 'orders'

    # Scan the DynamoDB table to get all orders
    response = dynamodb.scan(
        TableName=table_name
    )

    # Extract the orders from the response
    orders = response['Items']

    # Return the orders as the response
    return orders
