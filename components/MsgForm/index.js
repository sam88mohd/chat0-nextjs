import React from "react";
import style from "./MsgForm.module.css";

const MsgForm = () => {
  return (
    <form className={style.form}>
      <input type="text" placeholder="Type message here..." />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MsgForm;
