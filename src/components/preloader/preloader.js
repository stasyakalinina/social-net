import React from 'react';
import styles from './preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
      </div>
    </div>
  );
};

export default Preloader;