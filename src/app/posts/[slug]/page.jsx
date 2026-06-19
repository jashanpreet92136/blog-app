import React from "react";
import styles from "./indiviualPost.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comment from "@/components/comments/Comment";
const getData = async (slug) => {
  console.log("slug inside fn " + slug);
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const page = async ({ params }) => {
  const { slug } = await params;
  const post = await getData(slug);
  console.log("post", post);
  const cleanHtml = (html) => {
    return html.replace(/&nbsp;/g, " ");
  };

  return (
    <div className={styles.container}>
      <div className={styles.upperPart}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            <Image
              className={styles.userImage}
              src="/logo .png"
              alt=""
              width={35}
              height={35}
            />

            <div className={styles.userText}>
              <span className={styles.username}>{post?.user.name}</span>
              <span className={styles.date}>{post.createdAt.slice(0, 10)}</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          {post.img && (
            <Image className={styles.image} src={post.img} alt="" fill />
          )}
        </div>
      </div>

      <div className={styles.post}>
        <div className={styles.desc}>
          <div
            className={styles.des}
            dangerouslySetInnerHTML={{ __html: cleanHtml(post?.desc) }}
          />

          <Comment slug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
