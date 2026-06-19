import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

import Toggle from "../toggle/Toggle";
import Login from "../loginCompo/Login";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Image
          className={styles.image}
          src="/youtube.png"
          alt="youtube"
          width={24}
          height={24}
        />
        <Image src="/tiktok.png" alt="youtube" width={24} height={24} />
        <Image src="/facebook.png" alt="youtube" width={24} height={24} />
        <Image src="/instagram.png" alt="youtube" width={24} height={24} />{" "}
      </div>
      <div className={styles.logo}>nextblog</div>
      <div className={styles.links}>
        <Toggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="" className={styles.link}>
          Contact
        </Link>
        <Link href="" className={styles.link}>
          About
        </Link>
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
