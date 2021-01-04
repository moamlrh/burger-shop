export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
};

export const addToCartRedux = (product) => ({
  type: ACTIONS.ADD_TO_CART,
  payload: product,
});
 