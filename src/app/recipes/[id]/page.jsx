"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useParams } from "next/navigation";
import { supabase } from "../../utils/supabase/client";
import Link from "next/link";
import Image from "next/image";
import localImage from "../../../public/images/sample.png";

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
        <Image
          className={styles.recipeImg}
          width={100}
          height={100}
          src={recipe?.image_url ?? localImage}
          alt="recipe_img"
        />
      </div>
      <div className={styles.recipe}>
        <h1 className={styles.recipeTitle}>{recipe?.title}</h1>
        <h2 className={styles.contentTitle}>材料</h2>
        <dl className={styles.ingredientList}>{recipe?.ingredients}</dl>
        <h2 className={styles.contentTitle}>作り方</h2>
        <div className={styles.stepList}>{recipe?.content}</div>
        <Link href={`${recipe?.recipe_id}/edit`}>
          <button className={styles.createButton}>レシピを編集する</button>
        </Link>
      </div>
    </div>
  );
}
