import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="http://localhost:3000/api/hello.svg" height="280" width="840" />
    </div>
  );
}
