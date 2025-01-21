"use client";

import styles from "./styles.module.css";
import React from "react";


export const  Home = async () => {
  const supabase = createClient();

  const recipes= await supabase
    .from('recipes')
    .select('user_id','title')


  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>ALL</h1>
      {recipes.map((title) => (
      <div className={styles.cardArea}>
        <a className={styles.cardItem} href="#">
          <div className={styles.imgBox}>
            <img
              className={styles.cardItemImg}
              src="./images/pc01.png"
              alt=""
            />
          </div>
          <div className={styles.cardItems}>
            <p key={title.id} className={styles.cardItemTtl}>{title.title}</p>
          </div>
        </a>
      </div>
      ))}
    </div>
  );
}