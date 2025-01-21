"use client";

import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

const Create = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const todos = await getAllRecipes();
      setTodos(Recipes);
      console.log(Recipes);
    };
    getRecipes();
  }, []);

const Create = async () => {
  await supabase
  .from('recipes')
  .insert(
    { id: 1,
      name: 'title',
      name: 'ingredients',
      name: 'content'  }
  )
}

const handleSubmit = async (e) => {
  e.preventDefault();

  if (title === "") return;

  //Recipeの追加
  await addRecipe(title);
  await addRecipe(ingredients);
  await addRecipe(content);

  let todos = await getAllRecipes();
  setRecipes(Recipes);

  setTitle("");
  setIngredients("");
  setContent("");
};

  return (
    <div className={styles.flex}>
      <div className={styles.imgBox}>
        <div className={styles.recipeImg}>画像をアップロード</div>
      </div>
      <div className={styles.recipe}>
        <h1 className={styles.heading}>レシピを入力</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.uiForm}>
          <div>
            <label className={styles.label} htmlFor="title">レシピタイトル</label>
            <input 
              type="text" 
              id="title" 
              className={styles.recipeTitleInput}
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>

          <div>
            <label className={styles.label} htmlFor="ingredients">材料</label>
            <textarea 
              type="text"
              id="ingredients"
              placeholder="材料を入力..." 
              className={styles.ingredientInput}>
              onChange={(e) => setIngredients(e.target.value)} 
            </textarea>
          </div>

          <div>
            <label className={styles.label} htmlFor="content">作り方</label>
            <textarea 
              type="text" 
              id="content"
              placeholder="手順を入力..." 
              className={styles.contentInput}>
              onChange={(e) => setContent(e.target.value)} 
              </textarea>
          </div>
        </div>
          <button className={styles.createButton}>登録</button>
        </form>
      </div>
    </div>
  );
}

export default  Create
