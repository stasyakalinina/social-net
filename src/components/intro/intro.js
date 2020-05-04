import React from 'react';
import styles from './intro.module.css';
import ava from './girl.jpg'

const Intro = () => {
  return (
    <section className={styles.block}>
      <img className={styles.ava} src={ava} alt="avatar" />
      <ul className={styles.list}>
        <li>
          <span>City: </span>
          <span>Eho</span>
        </li>
        <li>
          <span>About: </span>
          <span>Some words about me</span>
        </li>
        <li>
          <span>Website: </span>
          <span>none</span>
        </li>
      </ul>
    </section>
  )
};

export default Intro;