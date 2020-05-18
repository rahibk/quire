import React from "react";

const MessageItem = (props) => {
  const [active, setActive] = React.useState(1);

  //standardizing the message preview, otherwise the messages can be of variable length and mess up the image sizing
  const messagePreview = (message) => {
    if (message.length < 63){
      var i = message.length;
      while (i < 63){
        message=message + "\u00A0";
      }
      return message;
    }else{
      return (message.substring(0,62) + '...')
    }
  }

  return (
    <>
      <div className="sidebar">
        <ul className="sideList">
          {props.data &&
            props.data.map((item) => (
              <li className={active && active === item.message_id ? "active":""} style={{cursor:'pointer'}} onClick={()=>{setActive(item.message_id)}}>
                <div className="imgHolder">
                  <img src="https://source.unsplash.com/random"></img>
                </div>
                <div className="txt">
                  <strong className="title"> {item.sender_id} </strong>
                  <p>
                    {messagePreview(item.body)}
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
