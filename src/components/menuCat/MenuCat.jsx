import React from "react";
import styles from "./menuCat.module.css";
import Link from "next/link";
const MenuCat = () => {
  return (
    <div className={styles.container}>
      <Link href="" className={`${styles.link} ${styles.food}`}>
        Food
      </Link>

      <Link href="" className={`${styles.link} ${styles.travel}`}>
        Travel
      </Link>

      <Link href="" className={`${styles.link} ${styles.coding}`}>
        Coding
      </Link>

      <Link href="" className={`${styles.link} ${styles.culture}`}>
        Culture
      </Link>

      <Link href="" className={`${styles.link} ${styles.fashion}`}>
        Fashion
      </Link>

      <Link href="" className={`${styles.link} ${styles.style}`}>
        Style
      </Link>
    </div>
  );
};

export default MenuCat;
