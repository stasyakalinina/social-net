import React from 'react';
import styles from './friends.module.css';

const Friends = (props) => {
  return (
    <section className={styles.block}>
      <h2>Friends</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </section>
  )
};

export default Friends;