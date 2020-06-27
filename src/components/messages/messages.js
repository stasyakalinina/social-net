import React from 'react';
import { ReduxAddMessageForm } from './messages-add-form';
import styles from './messages.module.css';

const Message = ({msg}) => {
  return (
    <div className={styles.message}>
      <p>{msg}</p>
    </div>
  );
};

const Messages = (props) => {
  const { messages, sendMessage } = props;

  const addNewMessage = (value) => {
    sendMessage(value.newMessageBody);
  }

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
      <ReduxAddMessageForm onSubmit={addNewMessage} />
    </React.Fragment>
  );
};

export default Messages;