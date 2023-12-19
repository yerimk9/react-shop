import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import cart from "../assets/cart.svg";
import { getCartItems } from "../cart.js";
import React, { useEffect, useState } from "react";
import getProducts from "../api.js";
import sun from "../assets/sun.svg";

export default function Nav({ totalItemsProp }) {
  const [totalItems, setTotalItems] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const cartInfo = getCartItems();
    const newTotalItems = cartInfo.reduce(
      (total, item) => total + item.counter,
      0
    );
    setTotalItems(newTotalItems);
  }, [totalItemsProp]);

  const handleSearchChange = async (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    const products = await getProducts();
    const matchingResults = products.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSearchResults(matchingResults);
  };

  return (
    <div className={`${styles.nav} ${styles.lightMode}`}>
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
        <button className={styles.toggleBtn}>
          <img src={sun} alt="colorChange" width="30px" />
        </button>
        <input
          placeholder="검색"
          value={searchInput}
          onChange={handleSearchChange}
        />
        {searchInput && searchResults.length > 0 && (
          <ul className={styles.searchList}>
            {searchResults.map((result) => (
              <li key={result.id}>
                <Link to={`/product/${result.id}`}>
                  <span style={{ color: "#fff" }}>{result.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link to={"/cart"}>
          <img src={cart} alt="cart" width="30px" />
          {totalItems > 0 && (
            <span className={styles.cartNum}>{totalItems}</span>
          )}
        </Link>
      </div>
    </div>
  );
}
