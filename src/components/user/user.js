import React from 'react';
import styles from './user.module.css';
import userPhoto from './../../assets/images/ava-default.png'
import { Link } from 'react-router-dom';

const User = (props) => {
  const { data, follow, unfollow } = props;

  const onFollowUser = (id) => {
    follow(id);
  };

  const onUnfollowUser = (id) => {
    unfollow(id);
  };

  return (
    <div className={styles.block} id={data.id} >
      <div className={styles.left}>
        <Link to={'/profile/' + data.id}>
          <img
          className={styles.ava}
          src={data.photos.small != null ? data.photos.small : userPhoto}
          alt="user ava"/>
        </Link>
        <button
          className={styles.btn}
          disabled={props.sendingRequest.some(id => id === data.id)}
          onClick={() => {
            data.followed ? onUnfollowUser(data.id) : onFollowUser(data.id) }
          }>
            { data.followed ? 'Unfollow' : 'Follow' }
        </button>
      </div>
      <div className={styles.right}>
        <div className={styles.text}>
          <p className={styles.name}>{data.name}</p>
          <p>{data.status}</p>
        </div>
        <div className={styles.location}>
          <p>{"data.location.city"}</p>
          <p>{"data.location.country"}</p>
        </div>
      </div>
    </div>
  )
};

export default User;