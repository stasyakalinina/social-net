const initialState = {
  users: [
    // {
    //   id: 1,
    //   name: 'Aang',
    //   src:'https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png',
    //   location: {
    //     city: 'Mexico City',
    //     country: 'Mexico'
    //   },
    //   followed: false,
    //   status: 'I love my cat'
    // },
    // {
    //   id: 2,
    //   name: 'Zuco',
    //   src:'https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142',
    //   location: {
    //     city: 'Colombia',
    //     country: 'Bogota'
    //   },
    //   followed: true,
    //   status: 'I drive my car'
    // },
    // {
    //   id: 3,
    //   name: 'Katara',
    //   src:'https://theblueraft.files.wordpress.com/2010/08/katara1.png?w=700',
    //   location: {
    //     city: 'Brasil',
    //     country: 'Rio de Janeiro'
    //   },
    //   followed: false,
    //   status: 'I eat my soup'
    // },
    // {
    //   id: 4,
    //   name: 'Toph',
    //   src:'https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest?cb=20131230122047',
    //   location: {
    //     city: 'Peru',
    //     country: 'Lima'
    //   },
    //   followed: true,
    //   status: 'I watch movies'
    // },
  ]
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
        users: [...state.users, ...action.payload]
      };

    default:
      return state;
  }
};

export default usersReducer;