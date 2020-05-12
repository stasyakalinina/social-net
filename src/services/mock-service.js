import profileReducer from '../reducers/profile-reducer';
import dialogsReducer from '../reducers/dialogs-reducer';

const store = {
  _data: {
    dialogPage: {
      dialogs: [
        {id: 1, name: 'Ann'},
        {id: 2, name: 'Elena'},
        {id: 3, name: 'Mary'},
        {id: 4, name: 'Fran'}
      ],
      messages: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Go to street!'},
        {id: 4, message: 'Hello world!!!'}
      ],
      newMessageText: '',
    },
    profilePage: {
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
    }
  },

  _callSubscriber() {
    console.log("State update");
  },

  getData() {
    return this._data;
  },

  dispatch(action) {

    this._data.profilePage = profileReducer(this._data.profilePage, action);
    this._data.dialogPage = dialogsReducer(this._data.dialogPage, action);

    this._callSubscriber(this._data);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
