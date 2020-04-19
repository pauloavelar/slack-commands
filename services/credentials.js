const { DynamoDB } = require('aws-sdk');
const tokens = new DynamoDB({ region: process.env.AWS_REGION });

async function getToken(teamId) {
  const results = await tokens.getItem({
    TableName: 'SlackCommands',
    Key: { teamId: { S: teamId } },
  }).promise();

  if (results && results.Item) {
    const tokenInfo = DynamoDB.Converter.unmarshall(results.Item);
    return tokenInfo.token;
  }
}

module.exports = {
  getToken,
};
