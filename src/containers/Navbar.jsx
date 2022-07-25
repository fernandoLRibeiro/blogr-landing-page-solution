import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import SubMenu from "../components/SubMenu";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const subMenus = [
    {
      label: "Product",
      options: [
        "Overview",
        "Pricing",
        "Marketplace",
        "Features",
        "Integrations",
      ],
    },
    {
      label: "Company",
      options: ["About", "Team", "Blog", "Careers"],
    },
    {
      label: "Connect",
      options: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];

  return (
    <header className={styles.primaryHeader}>
      <img src="./images/logo.svg" alt="Blogr Logo" className={styles.Logo} />
      <nav
        className={`${styles.navigation} ${isOpen && styles.navigationOpen}`}
      >
        <ul className={styles.mainMenu}>
          {subMenus.map((subMenu, index) => (
            <SubMenu
              label={subMenu.label}
              options={subMenu.options}
              key={index}
            />
          ))}
        </ul>
        <div className={styles.buttonsContainer}>
          <Button login>Login</Button>
          <Button primary signUp>
            Sign Up
          </Button>
        </div>
      </nav>

      <img
        className={styles.mobileNavButton}
        src={isOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"}
        alt={isOpen ? "close" : "open"}
        onClick={() => setIsOpen(!isOpen)}
      />
    </header>
  );
};

export default Navbar;
