export const addItemToCart = (carItems, cartItemToAdd) => {
  const existingCarItem = carItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCarItem) {
    return carItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...carItems, { ...cartItemToAdd, quantity: 1 }];
};
