"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Edit ()  {
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

  //const handleSubmit = async (e) => {
   // e.preventDefault();

   // const recipe = await supabase.from("recipes").delete({
      //user_id: 1,
    //  title: title,
    ///  ingredients: ingredients,
    //  content: content,
  //  });

 //   router.push("/");
 // };

  // const recipe = await supabase
  // .from("recipes")
  // .delete()
  // .in('recipe_id', [1, 2, 3])

  return (
    <div className={styles.flex}>
      <div className={styles.imgBox}>
        <div className={styles.recipeImg}>画像をアップロード</div>
      </div>
      <div className={styles.recipe}>
        <h1 className={styles.heading}>レシピを編集する</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.uiForm}>
            <div>
              <label className={styles.label} htmlFor="title">
              {recipe?.title}
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
                placeholder={recipe?.ingredients}
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
                placeholder="{recipe?.content}"
                className={styles.contentInput}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button className={styles.createButton}>登録</button>
          <button className={styles.editButton}>レシピを削除する</button>
        </form>
      </div>
    </div>
  );
};


