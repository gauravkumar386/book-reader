import { ADD_ITEM, DELETE_ALL_ITEM, DELETE_ITEM } from "../types/actionTypes";

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload

  };
};

export const deleteItem = (bookId) => {
  return {
    type: DELETE_ITEM,
    payload: bookId
  };
};

export const deleteAllItem = () => {
  return {
    type: DELETE_ALL_ITEM,
  }
}
