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

const DialogPage = ({data}) => {

  const { dialogs, messages} = data;
  const dialogsItems = dialogs.map((d) =>
    <li key={d.id}>
      <Dialog name={d.name}/>
    </li>
  );

  const messageItems = messages.map((m) =>
    <li key={m.id}>
      <Message msg={m.message}/>
    </li>
  );

  return (
    <section className={styles.block}>
      <ul className={styles.dialogList}>
        {dialogsItems}
      </ul>
      <ul className={styles.messageList}>
        {messageItems}
      </ul>
    </section>
  )
};

export default DialogPage;