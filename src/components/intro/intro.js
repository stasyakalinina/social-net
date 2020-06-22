import React from 'react';
import ava from './girl.jpg'
import Preloader from '../preloader/preloader';
import Status from '../status/status';
import './intro.scss';

const Intro = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <section className="intro">
      <img className="intro__ava" src={props.profile.photos.large ? props.profile.photos.large : ava} alt="avatar" />
      <ul className="intro__list">
        <li>
          <h1 className="intro__name">{props.profile.fullName}</h1>
        </li>
        <li>
          <Status status={props.status} updateStatus={props.updateStatus} />
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