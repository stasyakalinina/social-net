import React from 'react';
import styles from './intro.module.css';
import ava from './girl.jpg'
import Preloader from '../preloader/preloader';
import Status from '../status/status';

const Intro = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <section className={styles.block}>
      <img className={styles.ava} src={props.profile.photos.large ? props.profile.photos.large : ava} alt="avatar" />
      <ul className={styles.list}>
        <li>
          <h1 className={styles.name}>{props.profile.fullName}</h1>
        </li>
        <li>
          <Status status={"Hello world!"} />
        </li>
        <li>
          <span>About: </span>
          <span>{props.profile.aboutMe}</span>
        </li>
        <li>
          <span>Looking for a job? </span>
          <span>{props.profile.lookingForAJob ? "Yes" : "No"}</span>
        </li>
      </ul>
    </section>
  )
};

export default Intro;