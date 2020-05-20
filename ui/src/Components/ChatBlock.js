import React from "react";

const ChatBlock = (props) => {
  return (
    <>
    {props.focusedContract && props.messageData ? (
      <div>
      <div className="topBar">
        <div className="btnsHolder">
          <a href="#" className="btn btnGreen">
            Entrepreneur
          </a>
          <a href="#" className="btn btnBlue">
            Technology
          </a>
        </div>
        <div className="time">3 days ago</div>
      </div>
      <div className="textBlock">
        <header className="head">
          <h3 className="headig">
            <span className="re">re</span>
            <span className="headTxt">
              { props.messageData ? props.messageData[0].title : ""  }
            </span>
          </h3>
        </header>
        <div className="contentSection">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.”"Lorem ipsum dolor sit
            amet, consectetur
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magnais nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.”"Lorem ipsum dolor sit amet, co aliqua.Ut enim ad minim
            veniam, qunsectetur
          </p>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.”
          </p>
        </div>
      </div>

      <div className="textBlock">
        <header className="head">
          <h3 className="headig">
            <span className="headTxt">
             {props.title} 
            </span>
          </h3>
          <div className="time">3 days ago</div>
        </header>
        <div className="contentSection">
          <p>
            { props.message} 
          </p>
        </div>
      </div>
    </div> ) : (<p>No message</p>) }
    </>
  );
};

export default ChatBlock;
