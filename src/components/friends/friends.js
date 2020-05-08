import React from 'react';
import styles from './friends.module.css';


const Friends = ({data}) => {

  const friendsItems = data.map(friend =>
    <li key={friend.id} className={styles.item}>
      <img src={friend.src} className={styles.ava} alt="friend-ava" />
      <span className={styles.name}>{friend.name}</span>
    </li>
  );

  return (
    <section className={styles.block}>
      <h2>Friends</h2>
      <ul className={styles.list}>
        {friendsItems}
      </ul>
    </section>
  )
};

export default Friends;