import boto3
import uuid

# Create a DynamoDB client
dynamodb = boto3.client('dynamodb')

# Define the DynamoDB table name
table_name = 'orders'


def lambda_handler(event, context):
    # Get the input data from the event
    product_id = event['product_id']
    customer_id = event['customer_id']

    # Generate a unique order ID
    order_id = str(uuid.uuid4())


    # Create a new order item to be added to the table
    order_item = {
        'order_id': {'S': order_id},
        'product_id': {'S': product_id},
        'customer_id': {'S': customer_id}
    }

    # Put the order item into the DynamoDB table
    response = dynamodb.put_item(
        TableName=table_name,
        Item=order_item
    )

    # Return the order ID as the response
    return {
        'order_id': order_id
    }
