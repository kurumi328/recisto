import React from "react"
import styles from "./styles.module.css";

export default function Home() {
    
return (
<layout>
    <body className={styles.background}></body>
    <div className={styles.flex}>
        <div className={styles.imgBox}>
            <div className={styles.recipeImg}>
            画像をアップロード
            </div>
            
        </div>
        <div className={styles.recipe}>
        <h1 className={styles.heading}>レシピを入力</h1>
            <div className={styles.uiForm}>
            <h2 className={styles.recipeTitle}>レシピタイトル</h2>
            <div className={styles.categoryWrap}>
                <div className={styles.category}>カテゴリを選択</div>
            </div>    
            <h3 className={styles.contentTitle}>材料</h3>
            <dl className={styles.ingredientList}>
                材料を入力...
            </dl>
            <h2 className={styles.contentTitle}>作り方</h2>
                <ol className={styles.stepList}>
                    手順を入力...
                </ol>
            </div>    
        </div>
    </div>
</layout>
);
}
