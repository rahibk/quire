const db = require('../db_connect');

//POST endpoint to create a generic contract, it's worth keeping in mind that whenever we create a contract, it will always default to false for field isFinished
module.exports.createContract = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    
    const reqBody = JSON.parse(event.body);
    const influencerID = reqBody.influencerID;
    const buyerID = reqBody.buyerID;
    const monetaryValue = reqBody.monetaryValue;
    const charityID = reqBody.charityID;

    db.query('INSERT INTO contracts(influencer_id, buyer_id, monetary_value, charity_id, is_finished) VALUES($1, $2, $3, $4, false)', [influencerID, buyerID, monetaryValue, charityID])
        .then(res => {
            callback(null, {
                statusCode: 200,
                body: 'successfully inserted contract'
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
    db.query('SELECT * FROM contracts WHERE buyer_id=$1', [userID])
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
