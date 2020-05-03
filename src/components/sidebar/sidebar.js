import React from 'react';
import styles from './sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className={styles.block}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to="/profile" className={styles.link} activeClassName={styles.active} >Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs"
              className={styles.link}
              activeClassName={styles.active}>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={styles.link}>News</NavLink>
          </li>
          <li>
            <NavLink to="/music" className={styles.link}>Music</NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={styles.link}>Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
};

export default Sidebar;