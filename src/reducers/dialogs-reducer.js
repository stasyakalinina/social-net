const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SEND_MESSAGE':
      let newMsg = {
        id: 6,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMsg],
      };

    case 'UPDATE_MESSAGE_TEXT':
      return {
        ...state,
        newMessageText: action.payload,
      };

    default:
      return state;
  }
};

export default dialogsReducer;