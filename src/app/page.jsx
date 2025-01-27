"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase/client";
import Link from "next/link";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await supabase.from("recipes").select("*");
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>ALL</h1>
      <div className={styles.cardArea}>
        {recipes.map((recipe) => (
          <Link
            key={recipe.recipe_id}
            className={styles.cardItem}
            href={`recipes/${recipe.recipe_id}`}
          >
            <div className={styles.imgBox}>
              <img
                className={styles.cardItemImg}
                src="./images/greencurry.png"
                alt="recipe_img"
              />
            </div>
            <div className={styles.cardItems}>
              <p className={styles.cardItemTtl}>{recipe.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
