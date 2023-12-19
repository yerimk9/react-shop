export const CART_COOKIE_KEY = "cartInfo";

export const addToCart = (product) => {
  const cartItems = JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

  const existingItemIndex = cartItems.findIndex(
    (item) => item.id === product.id
  );

  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].counter += 1;
  } else {
    const updatedProduct = { ...product, counter: 1 };
    cartItems.push(updatedProduct);
  }

  localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(cartItems));
};

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];
};

export const removeCartItems = () => {
  localStorage.clear();
};
