import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.list}>
          <li>
            <a href="#" className={`${styles.link} ${styles.active}`}>Profile</a>
          </li>
          <li>
            <a href="#" className={styles.link}>Messages</a>
          </li>
          <li>
            <a href="#" className={styles.link}>News</a>
          </li>
          <li>
            <a href="#" className={styles.link}>Music</a>
          </li>
          <li>
            <a href="#" className={styles.link}>Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
};

export default Sidebar;