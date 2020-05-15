import { connect } from 'react-redux';
import { updateNewMessageCreator, sendMessageCreator } from './../../actions';
import Messages from './messages';

const mapStateToProps = (state) => {

  return {
    messages: state.dialogPage.messages,
    newMessageText: state.dialogPage.newMessageText,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTextMessage: (text) => {
      dispatch(updateNewMessageCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
      dispatch(updateNewMessageCreator(''));
    }
  }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;