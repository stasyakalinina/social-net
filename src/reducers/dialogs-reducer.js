const dialogsReducer = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      let newMsg = {
        id: 6,
        message: state.newMessageText,
      };
      state.messages.push(newMsg);
      return state;

    case 'UPDATE_MESSAGE_TEXT':
      state.newMessageText = action.payload;
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;