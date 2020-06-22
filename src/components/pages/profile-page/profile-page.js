import React from 'react';
import styles from './profile-page.module.css';
import Intro from '../../intro/intro';
import PostsContainer from '../../posts/posts-container';
import Friends from '../../friends/friends';

const ProfilePage = (props) => {

  return (
    <section className={styles.block}>
      <img className={styles.cover} src="https://i.pinimg.com/originals/23/05/35/230535d2013c6b8f34e2304d050df22f.jpg" alt="cover" />
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <Intro
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus} />
          <Friends />
        </div>
        <PostsContainer />
      </div>
    </section>
  )
};

export default ProfilePage;