import { connect } from 'react-redux';
import Dialogs from './dialogs'

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
  }
};


const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;