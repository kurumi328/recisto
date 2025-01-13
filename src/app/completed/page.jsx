import React from "react"
import styles from "./styles.module.css";

export default function Home() {
    
return (
  <layout>
    <body className={styles.background}></body>
    <div className={styles.formContainer}>
      <div className={styles.uiForm}>
        <div className={styles.completed}>登録が完了しました</div>
        <div className={styles.topPage}>トップページへ</div>
      </div>
    </div>
    </layout>
  );
}
