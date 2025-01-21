"use client";

import styles from "./styles.module.css";

export default function Create() {
  return (
    <div className={styles.flex}>
      <div className={styles.imgBox}>
        <div className={styles.recipeImg}>画像をアップロード</div>
      </div>
      <div className={styles.recipe}>
        <h1 className={styles.heading}>レシピを入力</h1>

        <div className={styles.uiForm}>
          <div>
            <label className={styles.label} htmlFor="title">レシピタイトル</label>
            <input type="text" id="title" className={styles.recipeTitleInput} />
          </div>

          <div>
            <label className={styles.label} htmlFor="ingredients">材料</label>
            <textarea placeholder="材料を入力..." className={styles.ingredientInput}></textarea>
          </div>

          <div>
            <label className={styles.label} htmlFor="content">作り方</label>
            <textarea type="text" placeholder="手順を入力..." className={styles.contentInput}></textarea>
          </div>
        </div>

        <button className={styles.createButton}>登録</button>
      </div>
    </div>
  );
}
