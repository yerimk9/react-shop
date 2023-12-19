import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [], // 장바구니 아이템 목록
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // 장바구니에 추가하는 로직을 구현합니다.
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.product],
      };
    case "REMOVE_FROM_CART":
      // 장바구니에서 제거하는 로직을 구현합니다.
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.product.id
        ),
      };

    case "CLEAR_CART":
      // 장바구니를 비우는 로직을 구현합니다.
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart는 CartProvider 내에서 사용되어야 합니다.");
  }
  return context;
};

export { CartProvider, useCart };
