import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import color from "./assets/color.svg";
import cart from "./assets/cart.svg";
import { getCartItems } from "./constants/cart.js";
import React, { useEffect, useState } from "react";

export default function Nav({ totalItemsProp }) {
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    const cartInfo = getCartItems();
    const newTotalItems = cartInfo.reduce(
      (total, item) => total + item.counter,
      0
    );
    setTotalItems(newTotalItems);
  }, [totalItemsProp]);

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <h2>
          <Link to="/">React Shop</Link>
        </h2>
        <div>
          <Link to="/fashion">패션</Link>
        </div>
        <div>
          <Link to="/accessory">액세서리</Link>
        </div>
        <div>
          <Link to="/digital">디지털</Link>
        </div>
      </div>
      <div className={styles.right}>
        <img src={color} alt="colorChange" width="30px" />
        <input placeholder="검색" />
        <Link to={"/cart"}>
          <img src={cart} alt="cart" width="30px" className={styles.cart} />
          {totalItems > 0 && (
            <span className={styles.cartNum}>{totalItems}</span>
          )}
        </Link>
      </div>
    </div>
  );
}
