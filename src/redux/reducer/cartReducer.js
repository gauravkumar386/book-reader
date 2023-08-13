import { ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEM } from "../types/actionTypes";

const initialState = {
  numOfItems: 0,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case DELETE_ITEM:
      const index = state.cartItems.findIndex(
        (x) => x.bookId === action.payload
      );
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, index),
          ...state.cartItems.slice(index + 1),
        ],
      };
    
    case DELETE_ALL_ITEM:
      return{
        ...state,
        cartItems:[]
      }

    default:
      return state;
  }
};

export default cartReducer;
