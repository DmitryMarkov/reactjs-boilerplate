import {
  ADD_BOOK,
  REMOVE_BOOK
} from '../constants/actions';

export const addBook = () => (
  {
    type: ADD_BOOK
  }
);

export const removeBook = () => (
  {
    type: REMOVE_BOOK
  }
);
