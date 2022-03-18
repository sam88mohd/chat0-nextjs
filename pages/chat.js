import Head from "next/head";
import { useEffect } from "react";
import BoxContent from "../components/BoxContent";
import BoxHeader from "../components/BoxHeader";
import MsgForm from "../components/MsgForm";
import { useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebase";

import style from "../styles/Chat.module.css";

export default function Chat() {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "messages"), orderBy("timeStamp"));
      onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });
        setMsg(messages);
      });
    };

    fetchData();
  }, [setMsg]);

  return (
    <div>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Chat App" />
      </Head>
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.chatBox}>
            <BoxHeader />
            <BoxContent msg={msg} />
            <MsgForm />
          </div>
        </div>
      </main>
    </div>
  );
}
