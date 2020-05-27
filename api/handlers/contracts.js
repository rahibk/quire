
const db = require('../db_connect');
const messages = require('./messages');

//POST endpoint to create a generic contract, it's worth keeping in mind that whenever we create a contract, it will always default to false for field isFinished
// NOTE: this is the endpoint we need to be hitting when we're sending that initial message from the website itself
module.exports.createContract = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    
    const reqBody = JSON.parse(event.body);
    const tag1 = reqBody.tag1;
    const tag2 = reqBody.tag2;
    const influencerID = reqBody.influencerID;
    const message = reqBody.message;
    const title = reqBody.title;
    const buyerID = reqBody.buyerID;
    const monetaryValue = reqBody.monetaryValue;
    const charityID = reqBody.charityID;
    const requestorName = reqBody.requestorName;
    var contractID;
    var receiverID;

    db.query('INSERT INTO contracts(influencer_id, buyer_id, monetary_value, charity_id, is_finished) VALUES($1, $2, $3, $4, false) RETURNING influencer_id, contract_id', [influencerID, buyerID, monetaryValue, charityID])
        .then(res => {
            receiverID = res.rows[0].influencer_id;
            contractID = res.rows[0].contract_id;
            db.query('SELECT  first_name, last_name, e_mail FROM users where user_id = $1', [receiverID])
                .then(res => {
                    messages.sendSESMessage(message, title, res.rows[0].e_mail, res.rows[0].first_name, requestorName, tag1, tag2)
                })
                .then(() =>{
                    db.query('INSERT INTO messages(sender_id, receiver_id, title, body, m_timestamp, contract_id) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, $5) RETURNING message_id', [buyerID, influencerID, title, message, contractID ])
                })
        })
        .then(() => {
            callback(null, {
                statusCode: 200,
                body: 'successfully inserted contract'
            })

        })
        .catch(e => {
            console.log(e)
            callback(null, {
                statusCode: e.statusCode || 500,
                body: e
            })
        })

};

//PUT endpoint to change a contract's status to finished
module.exports.finishContract = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    var contractID = event.path.id

    db.query('UPDATE contracts SET is_finished=true WHERE contract_id=$1', [contractID])
        .then(res => {
            callback(null, {
                statusCode: 200,
                body: 'successfully finished contract'
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

//GET endpoint to get all contracts for a given user (not influencer)
module.exports.getContracts = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    var userID = event.path.id
    db.query('SELECT * FROM users INNER JOIN contracts ON contracts.influencer_id = users.user_id WHERE contracts.buyer_id=$1', [userID])
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

//GET endpoint to get all contracts for a given user (not influencer)
module.exports.getInfluencerContracts = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    var influencerID = event.path.id
    db.query('SELECT * FROM contracts WHERE influencer_id=$1', [influencerID])
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
