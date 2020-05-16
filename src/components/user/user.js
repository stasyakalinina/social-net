import React from 'react';
import styles from './user.module.css';
import userPhoto from './../../assets/images/ava-default.png'

const User = (props) => {

  const { data } = props;

  return (
    <div className={styles.block} id={data.id} >
      <div className={styles.left}>
        <img
          className={styles.ava}
          src={data.photos.small != null ? data.photos.small : userPhoto}
          alt="user ava"/>
        <button
          className={styles.btn}
          onClick={() => {
            data.followed ? props.unfollowUser(data.id) : props.followUser(data.id) }
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