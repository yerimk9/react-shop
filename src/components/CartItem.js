import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { CART_COOKIE_KEY, getCartItems } from "../constants/cart";

function CartItem({ title, imageUrl, price }) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const cartInfo = getCartItems();
    const item = cartInfo.find((item) => item.title === title);
    if (!(item.counter < 0)) {
      setNum(item.counter);
    }
  }, [title]);

  const handleIncrement = () => {
    const cartInfo = getCartItems();
    const updateCart = cartInfo.map((item) =>
      item.title === title ? { ...item, counter: item.counter + 1 } : item
    );
    setNum((prevNum) => prevNum + 1);
    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(updateCart));
  };

  const handleDecrement = () => {
    if (num > 0) {
      const cartInfo = getCartItems();
      const updatedCart = cartInfo.map((item) =>
        item.title === title ? { ...item, counter: item.counter - 1 } : item
      );

      if (num - 1 === 0) {
        const updatedCartWithoutItem = cartInfo.filter(
          (item) => item.title !== title
        );
        localStorage.setItem(
          CART_COOKIE_KEY,
          JSON.stringify(updatedCartWithoutItem)
        );
        setNum(0);
      } else {
        localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(updatedCart));
        setNum((prevNum) => prevNum - 1);
      }
    }
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
          ${num * Math.round(price)}
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
