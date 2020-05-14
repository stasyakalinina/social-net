import React from 'react';
import styles from './dialogs-page.module.css';
import { Link } from 'react-router-dom';
import { updateNewMessageCreator, sendMessageCreator } from '../../../actions';

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

const DialogPage = ({state, dispatch}) => {

  const { dialogs, messages, newMessageText } = state.dialogPage;
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

  const sendMessage = () => {
    dispatch(sendMessageCreator());
    dispatch(updateNewMessageCreator(''));
  };

  const updateTextMessage = (e) => {
    let currentText = e.target.value;
    dispatch(updateNewMessageCreator(currentText));
  };

  return (
    <section className={styles.block}>
      <div className={styles.left}>
        <ul className={styles.dialogList}>
          {dialogsItems}
        </ul>
      </div>
      <div className={styles.right}>
        <ul className={styles.messageList}>
          {messageItems}
        </ul>
        <div className={styles.messageBlock}>
          <textarea
            className={styles.textarea}
            placeholder="Enter your message"
            onChange={updateTextMessage}
            value={newMessageText} />
          <button
            className={styles.btn}
            onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </section>
  )
};

export default DialogPage;