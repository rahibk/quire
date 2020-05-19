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

const useStyles = makeStyles((theme) => ({}));

export default function Messages() {
  const [messageData, setMessageData] = React.useState([]);

  const [contractData, setContractData] = React.useState([]);
  const [active, setActive] = React.useState(1);
  const [focusedCont, setFocusedMessage] = React.useState(0);
  const classes = useStyles();

  React.useEffect(() => {
    console.log(messagesEndpoint + userID)
    axios.get("https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/contracts/user/32")
    .then((res) =>{
      console.log(res)
      setContractData(JSON.parse(res.data.body));
      console.log("contractData" + contractData)
    })
    .catch((error => {
      console.log(error);
    })) 
    axios.get("https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/messages/32")
    .then((res) => {
        //console.log(res) 
      setMessageData(JSON.parse(res.data.body));
      console.log("messageData" + messageData[0]);
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
            { console.log(contractData)}
            <MessageItem contractData={contractData} />
            <div className="content">
              <ChatBlock messageData={messageData} />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </React.Fragment>
);
}