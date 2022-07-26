import React, { useState } from "react";
import styles from "../styles/InfoSection.module.css";

function InfoSection({ imgDesktop, imgMobile, articles, reverseLayout, alt }) {
  const [isMobile, setIsMobile] = useState(false);

  window.addEventListener("resize", () => {
    console.log(window.outerWidth);
    if (window.outerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <section
      className={`${styles.InfoSection} ${reverseLayout && styles.reverse}`}
    >
      <div className={styles.articlesContainer}>
        {articles.map((article, index) => (
          <article className={styles.article} key={index}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.articleParagraph}>{article.text}</p>
          </article>
        ))}
      </div>

      <img
        src={isMobile ? imgMobile : imgDesktop}
        className={styles.image}
        alt={alt}
      />
    </section>
  );
}

export default InfoSection;
