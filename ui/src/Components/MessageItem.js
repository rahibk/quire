import React from "react";

const MessageItem = (props) => {
  const [active, setActive] = React.useState(1);

  //standardizing the message preview, otherwise the messages can be of variable length and mess up the image sizing
 const messagePreview = (message) => {
    if (message.length < 63){
      var i = message.length;
      while (i < 63){
        message=message + " ";
        i++;
      }
      console.log(message)
      return message;
    }else{
      return (message.substring(0,62) + '...')
    }
  }

  return (
    <>
      <div className="sidebar">
        <ul className="sideList">
          {props.contractData &&
            props.contractData.map((item) => (
              <li className={active && active === item.contract_id ? "active":""} style={{cursor:'pointer'}} onClick={()=>{setActive(item.contract_id); props.setFocusedContract(item.contract_id)}}>
                <div className="imgHolder">
                  <img src="https://source.unsplash.com/random"></img>
                </div>
                <div className="txt">
                  <strong className="title"> {item.first_name + " " + item.last_name} </strong>
                  <p>
                    {console.log(item.isFinished)}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MessageItem;
