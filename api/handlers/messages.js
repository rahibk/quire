const db = require('../db_connect');



  //POST endpoint to create a message
  module.exports.createMessage = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const reqBody = JSON.parse(event.body);
    const firstName = reqBody.firstName;
    const lastName = reqBody.lastName;
    const emailAddress = reqBody.emailAddress;
  
    db.query('INSERT INTO users(first_name, last_name, e_mail) VALUES($1, $2, $3) RETURNING user_id', [firstName, lastName, emailAddress])
      .then(res => {
        callback(null, {
          statusCode: 200,
          body: 'successfully inserted user'
        })
      })
      .catch(e => {
        console.log(e);
        callback(null, {
          statusCode: e.statusCode || 500,
          body: 'Error:' + e
        });
      }); 
  };
