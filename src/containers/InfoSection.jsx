import React from "react";
import styles from "../styles/InfoSection.module.css";

function InfoSection({ imgDesktop, imgMobile, articles, reverseLayout }) {
  return (
    <section
      className={`${styles.InfoSection} ${reverseLayout && styles.reverse}`}
    >
      <div className={styles.articlesContainer}>
        {articles.map((article) => (
          <article className={styles.article}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.articleParagraph}>{article.text}</p>
          </article>
        ))}
      </div>

      <img src={imgDesktop} className={styles.image} />
    </section>
  );
}

export default InfoSection;
