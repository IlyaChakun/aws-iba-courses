const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const table = process.env.PRODUCT_TABLE;

exports.lambdaHandler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };

    try {
        switch (event.httpMethod) {
            case "DELETE":
                await dynamo
                    .delete({
                        TableName: table,
                        Key: {
                            id: event.pathParameters.id
                        }
                    })
                    .promise();
                body = `Deleted product ${event.pathParameters.id}`;
                break;
            case "GET":
                if (event.pathParameters != null) {
                    body = await dynamo
                        .get({
                            TableName: table,
                            Key: {
                                id: event.pathParameters.id
                            }
                        })
                        .promise();
                } else {
                    body = await dynamo.scan({ TableName: table }).promise();
                }
                break;
            case "POST":
                let requestJSON = JSON.parse(event.body);
                await dynamo
                    .put({
                        TableName: table,
                        Item: {
                            id: requestJSON.id,
                            price: requestJSON.price,
                            title: requestJSON.title,
                            description: requestJSON.description,
                        }
                    })
                    .promise();
                body = `Added/Updated product ${requestJSON.id}`;
                break;
            default:
                throw new Error(`Unsupported route: "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers
    };
};