export default class MockService {

  data = {
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
    },
    profilePage: {
      posts: [
        {id: 1, post: 'Hey'},
        {id: 2, post: 'How are you?'},
        {id: 3, post: 'Go to kitchen'},
        {id: 4, post: 'Hello people!'}
      ],
      friends: [
        {id: 1, name: 'Aang', src:'https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png'},
        {id: 1, name: 'Zuco', src:'https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142'},
        {id: 1, name: 'Katara', src:'https://theblueraft.files.wordpress.com/2010/08/katara1.png?w=700'},
        {id: 1, name: 'Toph', src:'https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest?cb=20131230122047'},
      ]
    }
  }
};