import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";
const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};
const CategoryList = async () => {
  const categories = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            key={item.id}
            className={`${styles.category} ${styles[item.slug]}`}
          >
            <Image
              className={styles.image}
              src={item.img}
              alt=""
              width={32}
              height={32}
            />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
