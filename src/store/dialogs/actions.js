export const updateNewMessage = (text) => {
  return {
    type: 'UPDATE_MESSAGE_TEXT',
    payload: text,
  }
};

export const sendMessage = (message) => {
  return {
    type: 'SEND_MESSAGE',
    payload: message,
  }
};