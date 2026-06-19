"use client";
import React, { useState } from "react";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link";
const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};
const Comment = ({ slug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `/api/comments?slug=${slug}`,
    fetcher,
  );
  const [desc, setDesc] = useState("");
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, slug }),
    });
    setDesc("");
    mutate();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status === "authenticated" ? (
        <div className={styles.form}>
          <textarea
            className={styles.input}
            name="comment"
            type="text"
            value={desc}
            placeholder="write a comment..."
            rows={5}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className={styles.sendbtn} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading..."
          : data?.map((item) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.user}>
                  <Image
                    className={styles.userImage}
                    src={item.img || "/logo .png"}
                    alt=""
                    width={35}
                    height={35}
                  />

                  <div className={styles.userText}>
                    <span className={styles.username}>{item?.user.name}</span>
                    <span className={styles.date}>
                      {item.createdAt.slice(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.text}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comment;
