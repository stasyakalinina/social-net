const profileReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_POST':
      let newPost = {
        id: 5,
        text: state.newPostText,
        like: 0
      };
      state.posts.push(newPost);
      return state;

      case 'UPDATE_POST_MESSAGE':
        state.newPostText = action.payload;
        return state;

    default:
      return state;
  }
};

export default profileReducer;