const db = require('../db_connect');

//POST endpoint to create an influencer
module.exports.createInfluencer = (event, context, callback) => {
    context.callbacksWaitsForEmptyEventLoop = false;
    
    const reqBody = JSON.parse(event.body);
    const firstName = reqBody.firstName;
    const lastName = reqBody.lastName;
    const emailAddress = reqBody.emailAddress;
    const charityID = reqBody.charityID;
    const tagline = reqBody.tagline;
    const summary = reqBody.summary;
    //inserting the user into users database
    db.query('INSERT INTO users(first_name, last_name, e_mail) VALUES($1, $2, $3) RETURNING user_id', [firstName, lastName, emailAddress])
      .then(res => {
        userID = res.rows[0].user_id;
        return userID
      })
      .then( userID =>{
        db.query('INSERT into influencers(influencer_id, charity_id, tagline, summary) VALUES ($1, $2, $3, $4)', [userID, charityID, tagline, summary]) 
      })
      //TODO: find a better way of accomplishing this
      .then(res =>{
        const tags = reqBody.tags;
        for(const tag of tags) {
          db.query('INSERT into tags(user_id, tag) VALUES ($1, $2) ', [userID, tag])
  
      }}) 
      .then(
        callback(null, {
          statusCode: 200,
          body: 'successfully inserted influencer'
        })
      )
      .catch(e => {
        console.log(e);
        callback(null, {
          statusCode: e.statusCode || 500,
          body: 'Error:' + e
        });
      });
  }
  
 //GET an influencer and all of their associated information (from users)
 module.exports.getInfluencer = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    var id = event.path.id

    db.query('SELECT * from influencers NATURAL JOIN users WHERE influencer_id=user_id AND user_id=$1', [id])
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
 }
