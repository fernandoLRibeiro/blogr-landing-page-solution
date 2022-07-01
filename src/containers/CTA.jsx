import React from "react";
import Button from "../components/Button";
import styles from "../styles/CTA.module.css";
import Navbar from "./Navbar";

const CTA = () => {
  return (
    <main className={styles.CTA}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1>A modern publishing platform</h1>
          <p className="subtitle">
            Grow your audience and build your online brand
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Button primary>Start for Free</Button>
          <Button outlined>Learn More</Button>
        </div>
      </div>
    </main>
  );
};

export default CTA;
