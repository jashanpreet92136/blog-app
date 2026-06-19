import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/feature`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const Featured = async () => {
  const post = await getData();
  // const stripHtml = (html) => {
  //   return html
  //     .replace(/<[^>]*>/g, "") // remove HTML tags
  //     .replace(/&nbsp;/g, " "); // fix spaces
  // };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b> Discover your creativity,</b> write your stories
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          {post.img && (
            <Image className={styles.img} src={post.img} alt="" fill />
          )}
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.h2}>
            <b> {post.title}</b>
          </h2>
          <p className={styles.p}>{post.desc.slice(0, 420)}...</p>
          <Link className={styles.btn} href={`/posts/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
