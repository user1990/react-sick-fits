interface Cart {
  item: {
    price: number;
  };
  quantity: number;
}

export const calcTotalPrice = (cart: Cart[]) => {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
};
