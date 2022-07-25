import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children, primary, outlined, signUp, login }) => {
  return (
    <button
      className={`${styles.Button}  ${primary && styles.primary} ${
        outlined && styles.outlined
      } ${signUp && styles.signUp} ${login && styles.login}`}
    >
      {children}
    </button>
  );
};

export default Button;
