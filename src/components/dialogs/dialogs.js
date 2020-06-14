import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './dialogs.module.css';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const Dialog = ({name, id}) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <Link to={`/dialogs/${id}`}>{name}</Link>
    </div>
  );
};

const Dialogs = (props) => {
  const {dialogs} = props;

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

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
  }
};

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(Dialogs);