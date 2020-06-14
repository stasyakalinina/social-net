import React from 'react';
import styles from './dialogs-page.module.css';
import DialogsContainer from './../../dialogs/dialogs';
import MessagesContainer from './../../messages/messages-container';


const DialogPage = () => {

  return (
    <section className={styles.block}>
      <div className={styles.left}>
        <DialogsContainer />
      </div>
      <div className={styles.right}>
        <MessagesContainer />
      </div>
    </section>
  )
};

export default DialogPage;