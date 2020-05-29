import React from 'react';
import styles from './user.module.css';
import userPhoto from './../../assets/images/ava-default.png'
import { Link } from 'react-router-dom';
import { followAPI } from '../../services/api';


const User = (props) => {
  const { data } = props;

  const onFollowUser = (id) => {
    props.toggleSendingRequest(true, id);
    followAPI.followUser(id).then(data => {
      if (data.resultCode === 0) {
        props.followUser(id)
      }
      props.toggleSendingRequest(false, id);
    })
  };

  const onUnfollowUser = (id) => {
    props.toggleSendingRequest(true, id);
    followAPI.unfollowUser(id).then(data => {
      if (data.resultCode === 0) {
        props.unfollowUser(id)
      }
      props.toggleSendingRequest(false, id);
    })
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