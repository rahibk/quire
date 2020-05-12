import React from "react";

const MessageItem = (props) => {
    const [active, setActive] = React.useState(1);
  return (
    <>
      <div className="sidebar">
        <ul className="sideList">
          {props.data &&
            props.data.map((item) => (
              <li className={active && active === item.sender_id ? "active":""} style={{cursor:'pointer'}} onClick={()=>{setActive(item.sender_id)}}>
                <div className="imgHolder">
                  <img src="https://source.unsplash.com/random"></img>
                </div>
                <div className="txt">
                  <strong className="title">Jennifer Tindal</strong>
                  <p>
                    "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit
                    trofld,...”
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
