import React from 'react';
import styles from './friends.module.css';
import { connect } from 'react-redux';

const Friends = ({friends}) => {

  const friendsItems = friends.map(friend =>
    <li key={friend.id} className={styles.item}>
      <img src={friend.src} className={styles.ava} alt="friend-ava" />
      <span className={styles.name}>{friend.name}</span>
    </li>
  );

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>Friends</h2>
      <ul className={styles.list}>
        {friendsItems}
      </ul>
    </section>
  )
};

const mapStateToProps = (state) => {
  return {
    friends: state.profilePage.friends,
  }
};

export default connect(mapStateToProps)(Friends);