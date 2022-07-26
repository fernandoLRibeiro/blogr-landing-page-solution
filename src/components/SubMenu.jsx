import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/SubMenu.module.css";

const SubMenu = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  window.addEventListener("resize", () => {
    console.log(window.outerWidth);
    if (window.outerWidth <= 810) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  useEffect(() => {
    if (window.outerWidth <= 810) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <li className={styles.subMenu}>
      <a className={styles.mainLink} onClick={() => setIsOpen(!isOpen)} href>
        {label}
        <img
          src={
            isMobile
              ? "./images/icon-arrow-dark.svg"
              : "./images/icon-arrow-light.svg"
          }
          alt="arrow icon"
          className={`${styles.icon} ${isOpen && styles.iconOpen}`}
        />
      </a>
      <ul
        className={`${styles.subMenuOptions} ${
          isOpen && styles.subMenuOptionsOpen
        }`}
      >
        {options.map((option, index) => (
          <li className={styles.subMenuOption} key={index}>
            <a className={styles.subLink} href>
              {option}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubMenu;
