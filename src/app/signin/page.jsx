"use client";

import styles from "./styles.module.css";

export default function SignIn() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.uiForm}>
        <input
          className={styles.userName}
          type="text"
          placeholder="ユーザー名"
        ></input>
        <input
          className={styles.mailAddress}
          type="text"
          placeholder="メールアドレス"
        ></input>
        <input
          className={styles.password}
          type="text"
          placeholder="パスワード"
        ></input>

        <button className={styles.signin}>ログイン</button>
        <div className={styles.signup}>アカウントをお持ちでない場合は登録</div>
      </div>
    </div>
  );
}
