"use client";
import React, { useState } from "react";
import styles from "./cardlist.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const CardList = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const stripHtml = (html) => {
    return html
      .replace(/<[^>]*>/g, "") // remove HTML tags
      .replace(/&nbsp;/g, " "); // fix spaces
  };
  return (
    <div className={styles.container} key={item.id}>
      {/* img  */}
      <div className={styles.imgContainer}>
        {item.img && (
          <Image className={styles.image} src={item.img} alt="" fill />
        )}
        <div className={styles.iconOverlay} onClick={() => setLiked(!liked)}>
          {!liked ? <FaRegHeart /> : <FaHeart />}
        </div>
      </div>
      {/* text */}
      <div className={styles.textContainer}>
        <div className={styles.upper}>
          <span className={styles.date}>{item.createdAt.slice(0, 10)}</span>{" "}
          <span className={styles.cat}>-{item.catSlug.toUpperCase()}</span>
        </div>
        <h3 className={styles.h}>
          <b>{item.title}</b>
        </h3>
        <p className={styles.p}>{stripHtml(item.desc).slice(0, 120)}...</p>
        <Link className={styles.link} id={item.id} href={`/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CardList;
