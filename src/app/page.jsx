import React from "react"
import styles from "./page.module.css";

export default function Home() {
    
return (
  <div className={styles.header}>
    <div className={styles.headerInner}>
    <div className={styles.appName}>ReciSto</div>
      <div className={styles.headerNavgroup}>
      <div className={styles.headerNavitem}>ALL</div>
        <div className={styles.headerNavitem}>Category</div>
        <div className={styles.headerNavitem}>MyPage</div>
        <div className={styles.headerNavitem}>Record Recipes</div>
      </div>
    </div>
  </div>
)
}