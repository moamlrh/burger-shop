import { ACTIONS } from "./Actions";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        totalPrice: state.totalPrice + payload.price,
      };
    default:
      return state;
  }
};
