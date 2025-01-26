"use client";

import { useRouter } from "next/navigation";
import { auth } from "../../../libs/Firebase";
import styles from "./styles.module.css";
import { signOut } from "firebase/auth";
import { useAuthContext } from "../../../contexts/AuthContext";

export function Header() {
  const router = useRouter();
  const { user } = useAuthContext();

  const handleSignout = async () => {
    try {
      await signOut(auth);

      router.push("/signIn");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.appName}>ReciSto</div>
        <div className={styles.headerNavgroup}>
          {user && (
            <button
              type="button"
              className={styles.button}
              onClick={handleSignout}
            >
              LOGOUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
