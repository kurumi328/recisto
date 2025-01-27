"use client";

import { useRouter } from "next/navigation";
import { auth } from "../../../libs/Firebase";
import styles from "./styles.module.css";
import { signOut } from "firebase/auth";
import { useAuthContext } from "../../../contexts/AuthContext";
import Link from "next/link";

export function Header() {
  const router = useRouter();
  const { user } = useAuthContext();

  const handleSignout = async () => {
    try {
      await signOut(auth);

      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.appName}>ReciSto</div>
        <div className={styles.headerNavgroup}>
          {user ? (
            <div className={styles.button_group}>
              <Link href="/create">
                <button
                  type="button"
                  className={styles.button}
                >
                  Recipe Create
                </button>
              </Link>
              <button
                type="button"
                className={styles.button}
                onClick={handleSignout}
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <div className={styles.button_group}>
              <Link href="/signin">
                <button type="button" className={styles.button}>
                  SIGNIN
                </button>
              </Link>
              <Link href="/signup">
                <button type="button" className={styles.button}>
                  SIGNUP
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
