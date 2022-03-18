import React from "react";

import style from "./BoxContent.module.css";

const BoxContent = ({ msg }) => {
  if (!msg) {
    return <div className={style.boxContent}>Loading...</div>;
  }

  if (msg.length === 0) {
    return <div className={style.boxContent}>Start typing to chat...</div>;
  }
  return (
    <div className={style.boxContent}>
      {msg.map((m, i) => (
        <div className={style.card} key={i}>
          <p>{m.text}</p>
          <div className={style.time}>
            <i>{m.timeStamp}</i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxContent;
