"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useParams } from "next/navigation";
import { supabase } from "../../utils/supabase/client";

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await supabase
        .from("recipes")
        .select("*")
        .eq("recipe_id", id)
        .single();

      setRecipe(data);
    };

    fetchRecipe();
  }, []);

  return (
    <div className={styles.flex}>
      <div className={styles.imgBox}>
        <img
          className={styles.recipeImg}
          src="./images/greencurry.png"
          alt=""
        />
      </div>
      <div className={styles.recipe}>
        <h1 className={styles.recipeTitle}>{recipe?.title}</h1>
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
  );
}
