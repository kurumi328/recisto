import React from "react"
import styles from "./styles.module.css";

export default function Home() {
    
return (
  <layout>
    <body className={styles.background}></body>
    <div className={styles.formContainer}>
      <div className={styles.uiForm}>
      <h2>新しいユーザー名の変更</h2>
      <div className={styles.newUserName} >
          <label>新しいユーザー名</label>
        </div>
        <button className={styles.change}>変更する</button>
      </div>
      </div>  
  </layout>
  );
}
