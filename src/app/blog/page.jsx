import React from "react";
import styles from "./singleCat.module.css";
import Cards from "@/components/cards/Cards";
import Menu from "@/components/menu/Menu";
const page = async ({ searchParams }) => {
  const page = Number((await searchParams).page) || 1;
  const { cat } = await searchParams;
  console.log("cat...............", cat);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <Cards page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default page;
