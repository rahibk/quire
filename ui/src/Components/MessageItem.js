import React from "react";

const MessageItem = (props) => {
  const [active, setActive] = React.useState();

  //standardizing the message preview, otherwise the messages can be of variable length and mess up the image sizing
 const setMessages = (contractId) => {
  props.setFocusedContract(contractId)
              
  let filteredMessages = [];
  if (props.messageData){
    props.messageData.map((message) =>{
      console.log( props.messageData);
      console.log(active);
      if (message.contract_id == active){
        filteredMessages += message;
      }
    })
    console.log("filteredMessages:" + filteredMessages);
    
    if (filteredMessages.length < 2) {
      console.log("here fr")
      console.log(filteredMessages[0])
       props.setMessage(filteredMessages[0]);
       console.log(props.message);
    } else {
      if (
        Date.parse(filteredMessages[0].timestamp) >
        Date.parse(filteredMessages[1].timestamp)
      ) {
        console.log("here");
        props.setMessage(filteredMessages[0]);
        props.setMessage2(filteredMessages[1]);
      } else {
        props.setMessage(filteredMessages[1]);
        props.setMessage2(filteredMessages[0]);
        console.log("here now");
      }
    }
    console.log(props.message)
    console.log(props.message2)

  }
}

  
  return (
    <>
      <div className="sidebar">
      <ul className="sideList">
      {props.contractData && props.contractData.map((item) =>
         <li className={active && active === item.contract_id ? "active":""} style={{cursor:'pointer'}} onClick={()=>{setActive(item.contract_id); props.setFocusedContract(item.contract_id); setMessages(item.contract_id);console.log(props.contractData); console.log("active" + item.contract_id)}}>
         
         <div className="imgHolder">
              <img src="https://source.unsplash.com/random"></img>
         </div>
         <div className="txt">
              <strong className="title"> {item.first_name + " " + item.last_name} </strong>
              <p>
                {item.isFinished}
              </p>
         </div>
         </li>
        )}
        </ul>
      </div>
    </>
  );
};

export default MessageItem;
