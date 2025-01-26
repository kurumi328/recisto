"use client";

import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../libs/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { supabase } from "../utils/supabase/client";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Firebase Auth 登録
      await createUserWithEmailAndPassword(auth, email, password);

      // Supabase Database 登録
      await supabase.from("users").insert({
        name: name,
        email: email,
      });

      router.push("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.uiForm}>
        <h2>アカウントの作成</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.userName}
            type="text"
            placeholder="ユーザー名"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className={styles.mailAddress}
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={styles.password}
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.caution}>
            ※4英数記号を含めた8 文字以上で入力してください
          </div>

          <button className={styles.next}>サインアップ</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
