const addPostActionCreator = () => {
  return {
    type: 'ADD_POST',
  }
};

const updatePostMessage = (text) => {
  return {
    type: 'UPDATE_POST_MESSAGE',
    payload: text,
  }
};

export {
  addPostActionCreator,
  updatePostMessage
}