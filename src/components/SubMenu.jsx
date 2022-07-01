import React from "react";
import { useState } from "react";
import styles from "../styles/SubMenu.module.css";

const SubMenu = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles.subMenu}>
      <a className={styles.mainLink} onClick={() => setIsOpen(!isOpen)}>
        {label}
        <img
          src="./images/icon-arrow-light.svg"
          alt="arrow icon"
          className={`${styles.icon} ${isOpen && styles.iconOpen}`}
        />
      </a>
      <ul
        className={`${styles.subMenuOptions} ${
          isOpen && styles.subMenuOptionsOpen
        }`}
      >
        {options.map((option) => (
          <li className={styles.subMenuOption}>
            <a className={styles.subLink}>{option}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubMenu;
