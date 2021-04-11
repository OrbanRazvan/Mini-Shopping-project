
export const initialShopping = {
  indexCart: [],
  user: null,
};

export const SubtotalCartItem = (indexCart) => {

  const Subtotal = indexCart.reduce((app, item) => app - item.price, 0);
  return (-Subtotal.toFixed(2));

};

export const TotalCartItem = (indexCart) => {
  const Subtotal = indexCart.reduce((app, item) => app - item.price, 0);
  const totalDiscount = indexCart.reduce((app, item) => app + (((5 * item.price)) / 100), 0);
  const totalPrice = -Subtotal - totalDiscount;
  return totalPrice.toFixed(2);
}

function reducer(state, action) {
  switch (action.type) {

    case 'ADD_TO_CART':


      return {
        ...state,
        indexCart: [...state.indexCart, action.item],
      }
    case 'REMOVE_TO_CART':
      let CopyCart = [...state.indexCart];

      if (action.item.id === 0) {
        CopyCart.splice(action.item.id, state.indexCart.length);
      }

      const index = state.indexCart.findIndex((indexCartitem) => action.item.id === indexCartitem.id);

      if (index >= 0) {
        CopyCart.splice(index, 1);
      }

      return {
        ...state,
        indexCart: CopyCart,
      }

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }

    default:
      return state;
  }
};

export default reducer;