import React from "react";
import Button from "../components/Button";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <img src="./images/logo.svg" alt="Blogr Logo" className={styles.Logo} />

      <div className={styles.buttonsContainer}>
        <Button>Login</Button>
        <Button primary>Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
