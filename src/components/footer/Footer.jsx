import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          src="/logo .png"
          alt="NextBlog Logo"
          width={40}
          height={40}
          className={styles.logo}
        />

        <h2 className={styles.title}>NextBlog</h2>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} NextBlog. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
