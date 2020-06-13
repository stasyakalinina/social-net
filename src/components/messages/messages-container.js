import { connect } from 'react-redux';
import { updateNewMessage, sendMessage } from './../../store/dialogs/actions';
import Messages from './messages';

const mapStateToProps = (state) => {

  return {
    messages: state.dialogPage.messages,
    newMessageText: state.dialogPage.newMessageText,
  }
};

const actions = {
  updateNewMessage,
  sendMessage
};

const MessagesContainer = connect(mapStateToProps, actions)(Messages);

export default MessagesContainer;