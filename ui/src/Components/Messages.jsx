import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import UserNavBar from "./UserNavBar";
import Footer from "./Footer";
import "../Styles/Messages.scss";
import MessageItem from "./MessageItem";
import ChatBlock from "./ChatBlock";

let messagesEndpoint =
  "https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/messages/";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({}));

export default function Messages() {
  const [active, setActive] = React.useState(1);
  const classes = useStyles();

  const [messageData, setMessageData] = React.useState(0);
  var i = 1;

  while (i == 1){
    axios.get(messagesEndpoint + "33")
    .then((res) => {
      setMessageData(JSON.parse(res.data.body));
      console.log(messageData);
    })
    .catch((error) => {
      console.log(error);
    });
    i++;
  }
  

  // const messages = fetch(https://k9g7kqmqtj.execute-api.us-east-1.amazonaws.com/dev/messages/ )
  /* let data = [
    {
      message_id: 1,
      sender_id: 1,
      senderName: "Jen abc",
      title: "What did you think about my startup idea? OOOOOOO",
      body: "What did you think about the shit that was happening, it's honestly pretty nuts that we're even in this posiiton",
      m_timestamp: "2020-05-02",
    },
    {
      message_id: 2,
      sender_id: 3,
      senderName: "Jen abc",
      title: "",
      body: "This is some next shit. This is ",
      m_timestamp: "2020-05-02"
    },
  ]; */
  return (
    <React.Fragment>
      <CssBaseline />
      <UserNavBar />
      <main>
        <div className="massagesHolder">
          <div className="container">
            <h2> 🙌Your messages, Serina. </h2>{" "}
            <div className="twoColumns">
              <MessageItem messageData={messageData} />{" "}
              <div className="content">
                <ChatBlock />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
      <Footer />
    </React.Fragment>
  );
}
