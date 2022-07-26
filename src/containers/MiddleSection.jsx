import React from "react";
import styles from "../styles/MiddleSection.module.css";

function MiddleSection() {
  return (
    <section className={styles.middleSection}>
      <img
        src="./images/illustration-phones.svg"
        className={styles.image}
        alt="Phones"
      />
      <article className={styles.article}>
        <h3 className={styles.articleHeading}>
          State of the Art Infrastructure
        </h3>
        <p className={styles.articleParagraph}>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </article>
    </section>
  );
}

export default MiddleSection;
