import React from "react";
import Button from "../components/Button";
import styles from "../styles/HeroSection.module.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className={styles.CTA}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>A modern publishing platform</h1>
          <p className={styles.subtitle}>
            Grow your audience and build your online brand
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Button primary>Start for Free</Button>
          <Button outlined>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
