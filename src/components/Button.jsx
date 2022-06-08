import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children, primary, outlined }) => {
  return (
    <button
      className={`${styles.Button}  ${primary && styles.primary} ${
        outlined && styles.outlined
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
