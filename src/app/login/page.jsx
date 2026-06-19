"use client";
import React, { useEffect } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Google from "next-auth/providers/google";
import { useRouter } from "next/navigation";
const page = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          <Image
            className={styles.image}
            src="/Google.png"
            alt=" "
            width={35}
            height={35}
          />
          <p>Sign in with Google</p>
        </div>
        <div className={styles.socialButton}>
          <Image
            className={styles.image}
            src="/githubb.png"
            alt=" "
            width={35}
            height={35}
          />
          <p>Sign in with Github</p>
        </div>{" "}
        <div className={styles.socialButton}>
          <Image
            className={styles.image}
            src="/facebook.png"
            alt=" "
            width={35}
            height={35}
          />
          <p>Sign in with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default page;
