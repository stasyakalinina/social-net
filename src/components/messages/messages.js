import React from 'react';

import styles from './messages.module.css';

const Message = ({msg}) => {
  return (
    <div className={styles.message}>
      <p>{msg}</p>
    </div>
  );
};

const EnterMessage = (props) => {

  const onSendMessage = () => {
    props.sendMessage();
  };

  const onUpdateTextMessage = (e) => {
    let currentText = e.target.value;
    props.updateNewMessage(currentText);
  };

  return (
    <div className={styles.messageBlock}>
      <textarea
        className={styles.textarea}
        placeholder="Enter your message"
        onChange={onUpdateTextMessage}
        value={props.newMessageText} />
      <button
        className={styles.btn}
        onClick={onSendMessage}>
        Send
      </button>
    </div>
  );
};

const Messages = (props) => {
  const { messages, newMessageText, updateNewMessage, sendMessage } = props;

  const messageItems = messages.map((m) =>
    <li key={m.id}>
      <Message msg={m.message}/>
    </li>
  );

  return (
    <React.Fragment>
      <ul className={styles.messageList}>
        {messageItems}
      </ul>
      <EnterMessage
        newMessageText={newMessageText}
        updateNewMessage={updateNewMessage}
        sendMessage={sendMessage} />
    </React.Fragment>
  );
};

export default Messages;