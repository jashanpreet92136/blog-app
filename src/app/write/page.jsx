"use client";
import React, { useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const page = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [file, setFile] = useState(null);

  const [title, setTitle] = useState("");

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // ...................
  const uploadImage = async (file) => {
    const data = new FormData();

    data.append("file", file);
    data.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      },
    );

    const result = await res.json();

    return result.secure_url;
  };
  // ....................
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setOpen(false); // close menu immediately
  };

  const handleSubmit = async () => {
    let imageUrl = "";

    if (file) {
      imageUrl = await uploadImage(file);
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc: value,
        img: imageUrl,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    const data = await res.json();
    router.push(`/posts/${data.slug}`);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div>
        <select
          className={styles.select}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <span
          style={{ display: !file ? "none" : "inline" }}
          className={styles.one}
        >
          {file?.name}
        </span>
      </div>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          style={open ? { marginTop: "40px" } : {}}
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default page;
