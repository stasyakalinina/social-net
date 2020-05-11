const addPostCreator = () => {
  return {
    type: 'ADD_POST',
  }
};

const updatePostMessageCreator = (text) => {
  return {
    type: 'UPDATE_POST_MESSAGE',
    payload: text,
  }
};

const updateNewMessageCreator = (text) => {
  return {
    type: 'UPDATE_MESSAGE_TEXT',
    payload: text,
  }
};

const sendMessageCreator = () => {
  return {
    type: 'SEND_MESSAGE',
  }
};

export {
  addPostCreator,
  updatePostMessageCreator,
  updateNewMessageCreator,
  sendMessageCreator
}