const db = require('../db_connect');

//GET endpoint to get all the users in the site
module.exports.getAllUsers = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    db.query('SELECT * FROM users')
      .then(res => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res.rows)
        })
      })
      .catch(e => {
        callback(null, {
          statusCode: e.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: e
        })
      })
  }; 
  
  //GET endpoint to get a specific user
  module.exports.getUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
  /*   const reqBody = JSON.parse(event.body)
    console.log(reqBody) */
  
    var id = event.path.id
    console.log(id)
    db.query('SELECT * FROM users WHERE user_id = $1', [id])
      .then(res => {
        callback(null, {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(res.rows)
        })
      })
      .catch(e => {
        console.log(e);
        callback(null, {
          statusCode: e.statusCode || 500,
          body: 'Error:' + e
        })
      })
  };
  
  //POST endpoint to create a generic user
  module.exports.createUser = (event, context, callback) => {
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