const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  loading: true,
  sendingRequest: []
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FOLLOW_FRIEND':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return {
              ...user,
              followed: true
            }
          }
          return user;
        }),
      };

    case 'UNFOLLOW_FRIEND':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return {
              ...user,
              followed: false
            }
          }
          return user;
        }),
      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      };

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload
      };

    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.payload
      };

    case 'TOGGLE_LOADING':
      return {
        ...state,
        loading: action.payload
      };

    case 'TOGGLE_SENDING_REQUEST':

      return {
        ...state,
        sendingRequest: action.isSending ? [...state.sendingRequest, action.userId] : state.sendingRequest.filter(id => id !== action.userId),
      };

    default:
      return state;
  }
};

export default usersReducer;