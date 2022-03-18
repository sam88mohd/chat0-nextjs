import React from "react";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import style from "./MsgForm.module.css";
import { db } from "../../firebase/firebase";

const MsgForm = () => {
  const [inputText, setInputText] = useState("");

  const handleSubmitMsg = async (e) => {
    e.preventDefault();
    const data = {
      text: inputText,
      timeStamp: Date.now(),
    };

    try {
      const docRef = await addDoc(collection(db, "messages"), data);
      console.log("Document added: ", docRef);
    } catch (error) {
      console.error("Error: ", error);
    }

    setInputText("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmitMsg}>
      <input
        type="text"
        placeholder="Type message here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MsgForm;
