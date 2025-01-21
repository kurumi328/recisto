"use client";

import styles from "./styles.module.css";
import React, { useState } from "react";
import { supabase } from "../utils/supabase/client";
import { useRouter } from "next/navigation";

const Create = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = await supabase
      .from("recipes")
      .insert({
        user_id: 1,
        title: title,
        ingredients: ingredients,
        content: content,
      });

    router.push("/");
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
              <label className={styles.label} htmlFor="title">
                レシピタイトル
              </label>
              <input
                type="text"
                id="title"
                className={styles.recipeTitleInput}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className={styles.label} htmlFor="ingredients">
                材料
              </label>
              <textarea
                type="text"
                id="ingredients"
                placeholder="材料を入力..."
                className={styles.ingredientInput}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label className={styles.label} htmlFor="content">
                作り方
              </label>
              <textarea
                type="text"
                id="content"
                placeholder="手順を入力..."
                className={styles.contentInput}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button className={styles.createButton}>登録</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
