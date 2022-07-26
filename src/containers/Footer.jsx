import React from "react";
import styles from "../styles/Footer.module.css";

const footerData = [
  {
    label: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  {
    label: "Company",
    links: ["About", "Team", "Blog", "Careers"],
  },
  {
    label: "Connect",
    links: ["Contact", "Newsletter", "LinkedIn"],
  },
];

function Footer() {
  return (
    <footer className={styles.Footer}>
      <img src="./images/logo.svg" alt="blogr logo" className={styles.logo} />
      <div className={styles.footerListsContainer}>
        {footerData.map((list, index) => (
          <div className={styles.footerListWrapper} key={index}>
            <h4 className={styles.footerListLabel}>{list.label}</h4>

            <ul className={styles.footerList}>
              {list.links.map((link, index) => (
                <li key={index}>
                  <a className={styles.footerLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
