import React from "react";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.uiForm}>
        <div className={styles.nameCgange}>ユーザー名を変更しました</div>
        <div className={styles.topPage}>トップページへ</div>
      </div>
    </div>
  );
}
