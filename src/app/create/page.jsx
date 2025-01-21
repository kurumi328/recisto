import React, { useState } from "react";
import styles from "./styles.module.css";
import { supabase } from "../utils/supabase";
import { getAllRecords, addTodo, deleteTodo } from "../utils/supabaseFunctions";


export default function Create(){
  const [isLoading, setIsLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");  
  const [newIngredients, setNewIngredients] = useState("");
  const [newRecipe, setNewRecipe] = useState("");
  const [error, setError] = useState("");
  

  useEffect(() => {
    getRecords();
  }, []);
  
  const getRecords = async () => {
    try {
      const fetchedRecords = await getAllRecords();
      setRecords(fetchedRecords);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching records:", error);
      setError("データの取得に失敗しました。");
      setIsLoading(false);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTitle.trim() === "" || newCategory.trim() === "" || newIngredients.trim() === "" || newRecipe.trim() === "") {
      setError("タイトルとカテゴリと材料と手順を入力してください");
      return;
    }
    try {
      const addedRecord = await addTodo(newTitle, newCategory, newIngredients, newRecipe);
      if (addedRecord) {
        setRecords([addedRecord, ...records]);
        setNewTitle("");
        setNewCategory("");
        setNewIngredients("");
        setNewRecipe("");
        setError("");
      }
    } catch (error) {
      console.error("Error adding record:", error);
      setError("記録の追加に失敗しました。");
    }
  };
  
  
    
return (
    <div className={styles.flex}>
        <div className={styles.imgBox}>
            <div className={styles.recipeImg}>
            画像をアップロード
            </div>
            
        </div>
        <div className={styles.recipe}>
        <h1 className={styles.heading}>レシピを入力</h1>
        {error && <p className="error">{error}</p>}
            <div className={styles.uiForm} onSubmit={handleSubmit}>
            <h2 className={styles.recipeTitle} title={newTitle} setTitle={setNewTitle} />
            <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)} />+
            <h3 className={styles.contentTitle}>材料</h3>
            <dl className={styles.ingredientList} title={newIngredients} setTitle={setNewIngredients} />
            <h2 className={styles.contentTitle}>作り方</h2>
                <ol className={styles.stepList} title={newRecipe} setTitle={setNewRecipe} />
            </div>    
            <button className={styles.createButton} onClick={handleCommentSubmit}>
              登録
　　　　　　　</button>
        </div>
    </div>
);
}
