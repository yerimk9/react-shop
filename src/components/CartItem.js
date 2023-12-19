import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { CART_COOKIE_KEY } from "../cart";
import { useCart } from "../CartContext";

function CartItem({ title, imageUrl, price, cartInfo, setTotalItems }) {
  const { dispatch } = useCart();
  const currentItem = cartInfo.find((item) => item.title === title);

  const [num, setNum] = useState(currentItem ? currentItem.counter : 0);

  useEffect(() => {
    const totalCount = cartInfo.reduce(
      (total, item) => total + item.counter,
      0
    );
    setTotalItems(totalCount);
  }, [cartInfo, setTotalItems]);

  const handleIncrement = () => {
    dispatch({ type: "ADD_TO_CART", payload: { product: currentItem } });
    setNum((prevNum) => prevNum + 1);

    // 로컬 스토리지 업데이트
    updateLocalStorage(currentItem.id, num + 1);

    setTotalItems((prevTotalItems) => prevTotalItems + 1);
  };

  const handleDecrement = () => {
    if (num > 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: { product: currentItem } });
      setNum((prevNum) => prevNum - 1);

      // 로컬 스토리지 업데이트
      const newCounter = num - 1;
      updateLocalStorage(currentItem.id, num - 1);

      setTotalItems((prevTotalItems) => prevTotalItems - 1);

      // 만약 개수가 0이라면 해당 상품을 로컬스토리지에서 삭제
      if (newCounter === 0) {
        removeProductFromLocalStorage(currentItem.id);
      }
    }
  };

  const removeProductFromLocalStorage = (productId) => {
    const updatedCart = cartInfo.filter((item) => item.id !== productId);
    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(updatedCart));
  };

  const updateLocalStorage = (productId, newCounter) => {
    const updatedCart = cartInfo.map((item) =>
      item.id === productId ? { ...item, counter: newCounter } : item
    );
    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(updatedCart));
  };

  return (
    <div className={styles.imgContainer}>
      <a href="/">
        <figure className={styles.imgContainerInner}>
          <img src={imageUrl} alt={title} className={styles.productImage} />
        </figure>
      </a>

      <div className={styles.descriptionContainer}>
        <h2 className={styles.productTitle}>
          <a href="/">{title}</a>
        </h2>
        <p className={styles.productPrice}>
          ${currentItem ? currentItem.counter * Math.round(price) : 0}
          <span> (${Math.round(price)})</span>
        </p>
        <div className={styles.productQuantity}>
          <div className={styles.btnGroup}>
            <button className="btn" onClick={handleDecrement}>
              -
            </button>
            <button className="btn">{num}</button>
            <button className="btn" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
