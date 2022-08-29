import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavbarItem = ({ ElementContent, index }) => (
    <li className={`NavbarNavbarItemsNavbarItem Item-${index}`}>
      <Link
        to={`/${ElementContent === "Home" ? "" : ElementContent.toLowerCase()}`}
      >
        <>{ElementContent}</>
      </Link>
    </li>
  );

  return (
    <nav className={styles.Navbar}>
      <Link to="/">
        <>
          <h1 className={styles.NavbarH1}>Sand</h1>
        </>
      </Link>
      <ul className={styles.NavbarNavbarItems}>
        {["Home", "About", "Resources", "Quiz"].map((text, index) => (
          <NavbarItem key={index} ElementContent={text} index={index + 1} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;