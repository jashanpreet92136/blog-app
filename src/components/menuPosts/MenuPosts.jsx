import React from "react";
import styles from "./menuposts.module.css";
import Link from "next/link";
import Image from "next/image";
const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.container}>
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/travel.png"
              alt=""
              width={60}
              height={60}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={styles.culture}>Culture</span>
          <p className={styles.p}>
            A Journey Through Bohemian Beauty: Exploring the Streets of Prague
          </p>
          <div className={styles.info}>
            <span>Jashan</span>{" "}
            <span className={styles.date}> - 10-05-2026</span>
          </div>
        </div>
      </Link>
      {/* 2 */}
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/food/food.png"
              alt=""
              width={60}
              height={60}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={styles.food}>Food</span>
          <p className={styles.p}>
            My Favorite Authentic Italian Pasta: A Taste of Tradition
          </p>
          <div className={styles.info}>
            <span>Jashan</span>
            <span className={styles.date}> - 10-05-2026</span>
          </div>
        </div>
      </Link>
      {/* 3 */}
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/fashion.png"
              alt=""
              width={60}
              height={60}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={styles.fashion}>Fashion</span>
          <p className={styles.p}>
            Timeless Fashion with a Modern Twist: The Winter Collection
          </p>
          <div className={styles.info}>
            <span>Jashan</span>
            <span className={styles.date}> - 10-05-2026</span>
          </div>
        </div>
      </Link>
      {/* 4 */}
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/coding.png"
              alt=""
              width={60}
              height={60}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={styles.coding}>Coding</span>
          <p className={styles.p}>
            The Easiest Way to Manage State in React Applications
          </p>
          <div className={styles.info}>
            <span>Jashan</span>
            <span className={styles.date}> - 10-05-2026</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
