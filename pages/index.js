import Head from "next/head";
import BoxContent from "../components/BoxContent";
import BoxHeader from "../components/BoxHeader";
import MsgForm from "../components/MsgForm";
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
            <BoxHeader />
            <BoxContent />
            <MsgForm />
          </div>
        </div>
      </main>
    </div>
  );
}
