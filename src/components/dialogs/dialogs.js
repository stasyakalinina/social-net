import React from 'react';
import { Link } from 'react-router-dom';
import styles from './dialogs.module.css';

const Dialog = ({name, id}) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <Link to={`/dialogs/${id}`}>{name}</Link>
    </div>
  );
};

const Dialogs = ({dialogs}) => {

  const dialogsItems = dialogs.map((d) =>
    <li key={d.id}>
      <Dialog name={d.name}/>
    </li>
  );

  return (
    <ul className={styles.dialogList}>
      {dialogsItems}
    </ul>
  );
}

export default Dialogs;