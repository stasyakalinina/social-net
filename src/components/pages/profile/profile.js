import React from 'react';
import styles from './profile.module.css';
import Intro from '../../intro/intro';
import Posts from '../../posts/posts';
import Friends from '../../friends/friends';

const ProfilePage = (props) => {
  const {data: { friends, posts} } = props;

  console.log(friends, posts);
  return (
    <section className={styles.block}>
      <img className={styles.cover} src="https://i.pinimg.com/originals/23/05/35/230535d2013c6b8f34e2304d050df22f.jpg" alt="cover" />
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <Intro />
          <Friends data={friends} />
        </div>
        <Posts data={posts} />
      </div>
    </section>
  )
};

export default ProfilePage;