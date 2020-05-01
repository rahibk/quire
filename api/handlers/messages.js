var dotenv = require('dotenv').config();
var aws = require('aws-sdk')
const db = require('../db_connect');


function sendSESMessage(body, title, receiverEmail, receiverName, requestorName, tag1, tag2) {
  var templateData = {
    name : receiverName,
    requestor_name : requestorName,
    title : title,
    body : body,
    tag1 : tag1,
    tag2 : tag2
  }

   const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
    region: process.env.AWS_SES_REGION
  };

  var params = {
    Source: 'noreply@quire.gq',
    Destination: {
      ToAddresses: [
       receiverEmail 
      ]
    },
    Template: 'MARTO_3',
    TemplateData: JSON.stringify(templateData)
  };

  new aws.SES(SESConfig).sendTemplatedEmail(params).promise()
  .catch(err =>{
    throw err;
  })
};
module.exports.sendSESMessage = sendSESMessage;

module.exports.handleIncomingMail = (event, callback, context) =>{
  console.log(event) 
}
//GET endpoint to get all contracts for a given user (not influencer)
module.exports.getMessagesForUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  var userID = event.path.id
  db.query('SELECT * FROM messages WHERE sender_id=$1 or receiver_id=$1 ', [userID])
      .then(res => {
          callback(null, {
              statusCode: 200,
              body: JSON.stringify(res.rows)
          })
      })
      .catch(e => {
          console.log(e);
          callback(null, {
              statusCode: e.statusCode || 500,
              body: 'Error:' + e
          });
      })

};
