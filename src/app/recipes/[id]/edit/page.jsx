"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase/client";
import { useParams, useRouter } from "next/navigation";

export default function Edit() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await supabase
        .from("recipes")
        .select("*")
        .eq("recipe_id", id)
        .single();

      setTitle(data.title);
      setIngredients(data.ingredients);
      setContent(data.content);
    };

    fetchRecipe();
  }, []);

  const handleUpdateSubmit = async () => {
    const { error } = await supabase
      .from("recipes")
      .update({ title: title, ingredients: ingredients, content: content })
      .eq("recipe_id", id)
      .select();

    router.push(`/recipes/${id}`);
  };

  const handleDeleteSubmit = async () => {
    const response = await supabase
      .from("recipes")
      .delete()
      .eq("recipe_id", id);
    router.push("/");
  };

  return (
    <div className={styles.flex}>
      <div className={styles.imgBox}>
        <div className={styles.recipeImg}>画像をアップロード</div>
      </div>
      <div className={styles.recipe}>
        <h1 className={styles.heading}>レシピを編集する</h1>
        <form>
          <div className={styles.uiForm}>
            <div>
              <label className={styles.label} htmlFor="title">
                レシピタイトル
              </label>
              <input
                type="text"
                id="title"
                value={title}
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
                value={ingredients}
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
                value={content}
                placeholder="手順を入力..."
                className={styles.contentInput}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            type="button"
            className={styles.createButton}
            onClick={handleUpdateSubmit}
          >
            更新
          </button>
          <button
            type="button"
            className={styles.editButton}
            onClick={handleDeleteSubmit}
          >
            レシピを削除する
          </button>
        </form>
      </div>
    </div>
  );
}
