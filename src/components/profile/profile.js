import React from 'react';
import styles from './profile.module.css';
import Intro from '../intro/intro';
import Posts from '../posts/posts';

const Profile = () => {
  return (
    <section className={styles.block}>
      <img className={styles.cover} src="https://i.pinimg.com/originals/23/05/35/230535d2013c6b8f34e2304d050df22f.jpg" alt="cover" />
      <div className={styles.wrapper}>
        <Intro />
        <Posts />
      </div>
    </section>
  )
};

export default Profile;