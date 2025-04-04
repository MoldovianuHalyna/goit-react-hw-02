import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <h1 className={styles.header}>Sip Happens Café</h1>
      <p className={styles.headerParagraph}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Header;
