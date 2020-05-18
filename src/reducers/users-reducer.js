const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 3,
  loading: true,
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

    default:
      return state;
  }
};

export default usersReducer;