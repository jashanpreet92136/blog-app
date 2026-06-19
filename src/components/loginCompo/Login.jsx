"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./login.module.css";
import { signOut, useSession } from "next-auth/react";

const Login = () => {
  const { status } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <>
        {status === "unauthenticated" ? (
          <Link className={styles.link} href="/login">
            Login
          </Link>
        ) : (
          <div className={styles.link}>
            <Link href="/write" className={styles.link}>
              Write
            </Link>
            <span className={styles.link} onClick={() => signOut()}>
              Logout
            </span>
          </div>
        )}
      </>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>{" "}
      {open && (
        <div className={styles.responsiveMenu}>
          <Link onClick={() => setOpen(!open)} href="/">
            Homepage
          </Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link onClick={() => setOpen(!open)} href="/write">
                Write
              </Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
