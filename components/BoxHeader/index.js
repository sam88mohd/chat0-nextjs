import React from "react";
import style from "./BoxHeader.module.css";

const BoxHeader = () => {
  return (
    <div className={style.boxHeader}>
      <h3>Group name</h3>
      <h5>Participant</h5>
    </div>
  );
};

export default BoxHeader;
