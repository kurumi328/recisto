import React from "react"
import styles from "./styles.module.css";

export default function Home() {
    
return (
  <layout>
    <body className={styles.background}></body>
    <div className={styles.flex}>
        <div className={styles.imgBox}>
            <img className={styles.recipeImg} src="./images/greencurry.png" alt="" />
        </div>
        <div className={styles.recipe}>
            <h1 className={styles.recipeTitle}>グリーンカレー</h1>
            <div className={styles.categoryWrap}>
                <div className={styles.category}>カレー</div>
                <div className={styles.category}>カレー</div>
                <div className={styles.category}>カレー</div>
                <div className={styles.category}>カレー</div>
                <div className={styles.category}>タイ料理</div>
                <div className={styles.category}>お気に入り</div>
                <div className={styles.category}>お気に入り</div>
            </div>    
            <h2 className={styles.contentTitle}>材料</h2>
            <dl className={styles.ingredientList}>
                <dt>テキストテキスト</dt>
                <dd>1個</dd>
                <dt>テキストテキスト</dt>
                <dd>1個</dd>
                <dt>テキストテキスト</dt>
                <dd>1個</dd>
                <dt>テキストテキスト</dt>
                <dd>1個</dd>
                <dt>テキストテキスト</dt>
                <dd>1個</dd>
            </dl>
            <h2 className={styles.contentTitle}>作り方</h2>
                <ol className={styles.stepList}>
                        <li>テキストテキストテキストテキスト</li>
                        <li>テキストテキストテキストテキスト</li>
                        <li>テキストテキストテキストテキスト</li>
                        <li>テキストテキストテキストテキスト</li>
                        <li>テキストテキストテキストテキスト</li>
                </ol>
        </div>
        </div>
    </layout>
);
}
