import React from "react";
import styles from "./TopNav.module.css";
const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <div className={styles.left}>
        <span>Write a review</span>
        <span>Events</span>
      </div>
      <div className={styles.right}>
        <span>Login</span>
        <button className="btn">Sign up</button>
      </div>
    </div>
  );
};

export default TopNav;
