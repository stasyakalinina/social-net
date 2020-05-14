const initialState = {
  posts: [
    {id: 1, text: 'Hey', like: 11},
    {id: 2, text: 'How are you?', like: 14},
    {id: 3, text: 'Go to kitchen', like: 9},
    {id: 4, text: 'Hello people!', like: 21}
  ],
  newPostText: '',
  friends: [
    {id: 1, name: 'Aang', src:'https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png'},
    {id: 2, name: 'Zuco', src:'https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142'},
    {id: 3, name: 'Katara', src:'https://theblueraft.files.wordpress.com/2010/08/katara1.png?w=700'},
    {id: 4, name: 'Toph', src:'https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest?cb=20131230122047'},
  ]
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_POST': {
      let newPost = {
        id: 5,
        text: state.newPostText,
        like: 0
      };
      let newState = {...state};
      newState.posts = [...state.posts];
      newState.posts.push(newPost);
      return newState;
    }

    case 'UPDATE_POST_MESSAGE': {
      let newState = {...state};
      newState.newPostText = action.payload;
      return newState;
    }

    default:
      return state;
  }
};

export default profileReducer;