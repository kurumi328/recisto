import styles from "./styles.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.appName}>ReciSto</div>
        <div className={styles.headerNavgroup}>
          <Link to="/"
          <div className={styles.headerNavitem}>ALL</div>
          </Link>
          <div className={styles.headerNavitem}>MyPage</div>
          <div className={styles.headerNavitem}>Record Recipes</div>
        </div>
      </div>
    </div>
  );
}
