import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import React from "react";
import styles from "./homepage.module.css";

import Menu from "@/components/menu/Menu";
import Cards from "@/components/cards/Cards";

const page = async ({ searchParams }) => {
  const page = Number((await searchParams).page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Cards page={page} />
        <Menu />
      </div>
    </div>
  );
};

export default page;
