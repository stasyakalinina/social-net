import React from 'react';
import styles from './dialogs.module.css';
import { Link } from 'react-router-dom';

const Dialog = ({name, id}) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <Link to={`/dialogs/${id}`}>{name}</Link>
    </div>
  );
};

const Message = ({msg}) => {
  return (
    <div className={styles.message}>
      <p>{msg}</p>
    </div>
  );
};

const DialogPage = () => {
  return (
    <section className={styles.block}>
      <ul className={styles.dialogList}>
        <li>
          <Dialog name="Ann" id="1"/>
        </li>
      </ul>
      <ul className={styles.messageList}>
        <li>
          <Message msg="Hi world!!" id="1"/>
        </li>
      </ul>
    </section>
  )
};

export default DialogPage;