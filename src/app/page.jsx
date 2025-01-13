import React from "react"
import styles from "./page.module.css";

export default function Home() {
    
return (
  <div className={styles.header}>
    <div className={styles.headerInner}>
    <div className={styles.appName}>ReciSto</div>
      <div className={styles.headerNavgroup}>
        <div className={styles.headerNavitem}>HOME</div>
        <div className={styles.headerNavitem}>NewRecipe</div>
        <div className={styles.headerNavitem}>MyPage</div>
      </div>
    </div>
  </div>
)
}