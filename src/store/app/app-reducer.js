const initialState = {
  initialized: false,
  isAuth: false,
  loading: false,
};

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_INITIALIZED':
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export default appReducer;