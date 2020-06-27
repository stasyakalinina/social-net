const initialState = {
  posts: [
    {id: 1, text: 'Hey', like: 11},
    {id: 2, text: 'How are you?', like: 14},
    {id: 3, text: 'Go to kitchen', like: 9},
    {id: 4, text: 'Hello people!', like: 21}
  ],
  friends: [
    {id: 1, name: 'Aang', src:'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest/top-crop/width/360/height/360?cb=20120311133235'},
    {id: 2, name: 'Zuco', src:'https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142'},
    {id: 3, name: 'Katara', src:'https://theblueraft.files.wordpress.com/2010/08/katara1.png?w=700'},
    {id: 4, name: 'Toph', src:'https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest?cb=20131230122047'},
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_POST': {
      let newPost = {
        id: 5,
        text: action.payload,
        like: 0
      };

      return {
        ...state,
        posts: [newPost, ...state.posts]
      }
    };

    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.payload
      };

    case 'SET_STATUS':
      return {
        ...state,
        status: action.payload
      };

    default:
      return state;
  }
};

export default profileReducer;