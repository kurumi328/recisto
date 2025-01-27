"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../libs/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.uiForm}>
        <h2>ログイン</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.mailAddress}
            type="text"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={styles.password}
            type="text"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className={styles.signin}>
            ログイン
          </button>
        </form>

        <Link href={"/signup"} className={styles.signup}>
          アカウントをお持ちでない場合は登録
        </Link>
      </div>
    </div>
  );
}
