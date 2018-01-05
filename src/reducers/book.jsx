import { ADD_BOOK } from '../constants/actions';

// This is just an example of initial state
const initState = {
  books: [
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
  ]
};

// state = [] for default (only for demo purpose)
const book = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.insert] };
    default:
      return state;
  }
};

export default book;
