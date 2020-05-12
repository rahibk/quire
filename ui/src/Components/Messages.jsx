import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import UserNavBar from "./UserNavBar";
import Footer from "./Footer";
import '../Styles/Massages.scss'; 
import MessageItem from './MessageItem';
import ChatBlock from './ChatBlock';

const useStyles = makeStyles((theme) => ({
  
}));


export default function Messages() {
  const classes = useStyles();
  let data = [
    {
      sender_id: 1,
      receiver_id: 2,
      senderName: "Jen abc",
      message:
        "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit trofld,...",
      chat: [
        {
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
        sender_id: 3,
        receiver_id: 2,
        senderName: "Jen abc",
        message:
          "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit trofld,...",
        chat: [
          {
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            reply:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ],
      },
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <UserNavBar/>
      <main>
        <div className="massagesHolder">
          <div className="container">
            <h2>🙌 Your messages, Serina.</h2>
            <div className="twoColumns">
                <MessageItem
                data={data}
                />
                <div className="content">
                  <ChatBlock/>
                </div>

            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
