# Endpoints  
## Users  
### Get all users  
`GET /users`

### Get specific users
`GET /users/{user_id}` 

### Insert user
`POST /users/new`
| Parameters    |
| ------------- |
| firstName     | 
| lastName      | 
| emailAddress  | 


endpoints:
  GET - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/users
  GET - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/users/{id}
  POST - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/users/new
  POST - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/users/influencers/new
  GET - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/users/influencers/{id}
  GET - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/charities
  GET - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/charities/{id}
  POST - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/charities/new
  POST - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/contracts/new
  PUT - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/contracts/end/{id}
  GET - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/contracts/user/{id}
  GET - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/contracts/influencer/{id}
  POST - https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/messages/new