import { connect } from 'react-redux';
import { sendMessage } from './../../store/dialogs/actions';
import Messages from './messages';

const mapStateToProps = (state) => {

  return {
    messages: state.dialogPage.messages,
  }
};

const actions = {
  sendMessage
};

const MessagesContainer = connect(mapStateToProps, actions)(Messages);

export default MessagesContainer;