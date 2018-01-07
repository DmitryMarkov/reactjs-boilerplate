import {
  ADD_BOOK,
  REMOVE_BOOKS
} from '../constants/actions';

let counter = 2;

// eslint-disable-next-line
export const addBook = (id, author, title) => ({
  type: ADD_BOOK,
  id: counter += 1,
  author,
  title
});

export const removeBooks = () => ({
  type: REMOVE_BOOKS
});
