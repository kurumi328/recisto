import React from "react"
import styles from "./styles.module.css";

export function Header() {
    
return (
  <div className={styles.header}>
    <div className={styles.headerInner}>
    <div className={styles.appName}>ReciSto</div>
      <div className={styles.headerNavgroup}>
        <div className={styles.headerNavitem}>ALL</div>
        <div className={styles.headerNavitem}>Category</div>
        <div className={styles.headerNavitem}>NewRecipe</div>
        <div className={styles.headerNavitem}>MyPage</div>
      </div>
    </div>
  </div>
)
}