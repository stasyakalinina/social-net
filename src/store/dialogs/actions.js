export const updateNewMessage = (text) => {
  return {
    type: 'UPDATE_MESSAGE_TEXT',
    payload: text,
  }
};

export const sendMessage = () => {
  return {
    type: 'SEND_MESSAGE',
  }
};