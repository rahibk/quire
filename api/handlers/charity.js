const db = require('../db_connect');

module.exports.getCharity = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  var id = event.path.id

  db.query('SELECT * FROM charity WHERE charity_id = $1', [id])
    .then(res => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
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

//GET endpoint to get all of the charities
module.exports.getAllCharities = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  db.query('SELECT * FROM charity')
    .then(res => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
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

// POST endpoint to create a generic charity, I fucked up and the PK is not of type serial, on the prod db, this will change
 module.exports.createCharity = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const reqBody = JSON.parse(event.body);
  const charityName = reqBody.charityName;
  const tagline = reqBody.tagline;
  const summary = reqBody.summary;

  db.query('INSERT INTO charity(charity_name, tagline, summary) VALUES($1, $2, $3)', [charityName, tagline, summary])
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: 'successfully inserted charity'
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