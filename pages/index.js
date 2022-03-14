import Head from "next/head";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Chat App" />
      </Head>
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.chatBox}>
            <div className={style.boxHeader}>
              <h3>Group name</h3>
              <h5>Participant</h5>
            </div>
            <div className={style.boxContent}></div>
            <form className={style.form}>
              <input type="text" placeholder="Type message here..." />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
