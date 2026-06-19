import React from "react";
import styles from "./cards.module.css";
import CardList from "../cardList/CardList";
import Pagination from "../pagination/Pagination";
const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const Cards = async ({ page, cat }) => {
  const { posts, limit, count } = await getData(page, cat);

  const hasPrev = page > 1;
  const hasNext = page < Math.ceil(count / limit);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts </h1>
      {posts.map((item) => (
        <CardList item={item} key={item.id} />
      ))}

      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} cat={cat} />
    </div>
  );
};

export default Cards;
