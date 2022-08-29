import React from "react";
import styles from "./Footer.module.css";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>Thank You for visiting!</p>|
      <a href="https://github.com/sriharideveloper/sand" target="blank">
        <small>
          VIEW ON <BsGithub fontSize={20} />
        </small>
      </a>
      |
      <img src="/SAND.png" alt="SAND" width="25" height="25" />
    </footer>
  );
};

export default Footer;
