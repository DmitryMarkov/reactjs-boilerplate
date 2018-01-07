import {
  ADD_BOOK,
  REMOVE_BOOKS
} from '../constants/actions';

const initialState = [
  {
    id: 0,
    author: 'John Smith',
    title: 'React Redux for dummies'
  },
  {
    id: 1,
    author: 'Alex Johnson',
    title: 'ES6 for dummies'
  }
];

// state = [] default
const book = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          author: action.author,
          title: action.title
        }
      ];
    case REMOVE_BOOKS:
      return initialState;
    default:
      return state;
  }
};

export default book;
