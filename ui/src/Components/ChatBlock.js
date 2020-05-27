import React from "react";



const ChatBlock = (props) => {
  
  return (
    <>
      {props.focusedContract ? (
        
        <div>
          <div className="topBar">
            
            <div className="btnsHolder">
              <a href="#" className="btn btnGreen">
                { 
                  props.message.tag1 != undefined ? props.message.tag1 : <p></p>
                }
              </a>
              <a href="#" className="btn btnBlue">
                {props.message.tag2}
              </a>
            </div>
            <div className="time">3 days ago</div>
          </div>

          <div className="textBlock">
            <header className="head">
              <h3 className="heading">
                {() => {
                  if (props.message2) {
                    return (<span className="re">re</span>);
                  }
                }}
                <span className="headTxt">{props.message.title}</span>
              </h3>
            </header>
            <div className="contentSection">
              <p>{props.message.body}</p>
            </div>
          </div>
          
            <div className="textBlock">
              <header className="head">
                <h3 className="heading">
                  <span className="headTxt">{props.message2.title}</span>
                </h3>
                <div className="time">3 days ago</div>
              </header>
              <div className="contentSection">
                <p>{props.message2.message}</p>
              </div>
            </div>;
        </div>
      ) : (
        <p>Please select a conversation from the left</p>
      )}
    </>
  );
};

export default ChatBlock;
