import React from "react"
import styles from "./styles.module.css";

export default function Home() {
    
return (
  <layout>
    <body className={styles.background}></body>
    <div className={styles.formContainer}>
      <div className={styles.uiForm}>
      <h2>アカウントの作成</h2>
      <div className={styles.userName} >
          <label>ユーザー名</label>
        </div>
        <div className={styles.password}>
          <label>パスワード</label>
        </div>
        <div className={styles.caution}>※4英数記号を含めた8 文字以上で入力してください</div>
        <button className={styles.next}>次へ</button>
      </div>
    </div>
    </layout>
  );
}
