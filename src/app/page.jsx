"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase/client";

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
          <a key={recipe.recipe_id} className={styles.cardItem} href="#">
            <div className={styles.imgBox}>
              <img
                className={styles.cardItemImg}
                src="./images/pc01.png"
                alt=""
              />
            </div>
            <div className={styles.cardItems}>
              <p className={styles.cardItemTtl}>{recipe.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
