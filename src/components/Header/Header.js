import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
      <p className={styles.heading}>
          A
        </p>
        <p className={styles.heading}>
          <span>Resume</span>
        </p>
        <p className={styles.heading}>
          Builder App
        </p>
      </div>
    
    </div>
  );
}

export default Header;
