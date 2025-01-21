"use client";

import styles from "./styles.module.css";

export default function Create() {

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (
  //     newTitle.trim() === "" ||
  //     newCategory.trim() === "" ||
  //     newIngredients.trim() === "" ||
  //     newRecipe.trim() === ""
  //   ) {
  //     setError("タイトルとカテゴリと材料と手順を入力してください");
  //     return;
  //   }
  //   try {
  //     const addedRecord = await addTodo(
  //       newTitle,
  //       newCategory,
  //       newIngredients,
  //       newRecipe,
  //     );
  //     if (addedRecord) {
  //       setRecords([addedRecord, ...records]);
  //       setNewTitle("");
  //       setNewCategory("");
  //       setNewIngredients("");
  //       setNewRecipe("");
  //       setError("");
  //     }
  //   } catch (error) {
  //     console.error("Error adding record:", error);
  //     setError("記録の追加に失敗しました。");
  //   }
  // };

  return (
    <div className={styles.flex}>
      <div className={styles.imgBox}>
        <div className={styles.recipeImg}>画像をアップロード</div>
      </div>
      <div className={styles.recipe}>
        <h1 className={styles.heading}>レシピを入力</h1>
        <div className={styles.uiForm}>
          <h2 className={styles.recipeTitle}>レシピタイトル</h2>
          <h3 className={styles.contentTitle}>材料</h3>
          <dl className={styles.ingredientList}>材料を入力...</dl>
          <h2 className={styles.contentTitle}>作り方</h2>
          <ol className={styles.stepList}>手順を入力...</ol>
        </div>

        <button className={styles.createButton}>登録</button>
      </div>
    </div>
  );
}
