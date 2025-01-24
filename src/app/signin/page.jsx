"use client";

import styles from "./styles.module.css";

export default function SignIn() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.uiForm}>
        <div className={styles.userName}>
          <label>ユーザー名</label>
        </div>
        <div className={styles.mailAddress}>
          <label>メールアドレス</label>
        </div>
        <div className={styles.password}>
          <label>パスワード</label>
        </div>
        <button className={styles.signin}>ログイン</button>
        <div className={styles.signup}>アカウントをお持ちでない場合は登録</div>
      </div>
    </div>
  );
}
