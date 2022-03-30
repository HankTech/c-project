const aws = require('aws-sdk')
const ddb = new aws.DynamoDB()

const tableName = process.env.USERTABLE

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger

  if (!event?.userName) {
    console.log('No sub provided')
    return
  }

  const now = new Date()
  const timestamp = now.getTime()

  const userItem = {
    __typename: { S: 'User' },
    _lastChangedAt: { N: timestamp.toString() },
    _version: { N: '1' },
    updatedAt: { S: now.toISOString() },
    createdAt: { S: now.toISOString() },
    id: { S: event?.userName },
    name: { S: event.request.userAttributes.email }
  }

  // save a new user to DynamoDB
  const params = {
    Item: userItem,
    TableName: tableName
  }

  try {
    console.log(params)
    await ddb.putItem(params).promise()
    console.log('success')
  } catch (error) {
    console.log('error saving user')
    console.log(error)
  }
}
