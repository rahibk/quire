import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import UserNavBar from "./UserNavBar";
import Footer from "./Footer";
import "../Styles/Messages.scss";
import MessageItem from "./MessageItem";
import ChatBlock from "./ChatBlock";

let messagesEndpoint = "https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/messages/";
let contractsEndpoint="https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/contracts/user/"
let userID = "33";
const axios = require("axios");

export default function Messages() {
  
  const [messageData, setMessageData] = React.useState([]);
  const [contractData, setContractData] = React.useState([]);
  const [focusedContract, setFocusedContract] = React.useState(0);
  const [message, setMessage] = React.useState({});
  const [message2, setMessage2] = React.useState({});
  
  React.useEffect(() => {
    axios.get("https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/contracts/user/32")
    .then((res) =>{
      setContractData(JSON.parse(res.data.body));
    })
    .catch((error => {
    })) 
    axios.get("https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/messages/32")
    .then((res) => {
      console.log(res)
      setMessageData(JSON.parse(res.data.body));
      console.log("messageData" + messageData)
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);
    

return (
  <React.Fragment>
    <CssBaseline />
    <UserNavBar />
    <main>
      <div className="massagesHolder">
        <div className="container">
          <h2> 🙌Your messages, Serina. </h2>
          <div className="twoColumns">
            <MessageItem contractData={contractData} messageData={messageData} setFocusedContract={setFocusedContract} setMessage={setMessage} setMessage2={setMessage2}/>
            <div className="content">
              <ChatBlock messageData={messageData} focusedContract={focusedContract} message={message} message2={message2}/>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </React.Fragment>
);
}