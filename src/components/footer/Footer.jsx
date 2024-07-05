import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerFooter}>&copy; Kiyado.com 2024</div>
    </footer>
  );
};

export default Footer;
