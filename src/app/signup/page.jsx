"use client";

import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.uiForm}>
        <h2>アカウントの作成</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.userName}
            type="text"
            placeholder="ユーザー名"
          ></input>
          <input
            className={styles.mailAddress}
            type="email"
            placeholder="メールアドレス"
            onChange={(event) => handleChangeEmail(event)}
          ></input>
          <input
            className={styles.password}
            type="password"
            placeholder="パスワード"
            onChange={(event) => handleChangePassword(event)}
          ></input>
          <div className={styles.caution}>
            ※4英数記号を含めた8 文字以上で入力してください
          </div>
          <button className={styles.next}>次へ</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
