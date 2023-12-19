import React, { useEffect, useState } from "react";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";
import { getCartItems, removeCartItems } from "../cart"; // Import removeCartItems
import CartItem from "../components/CartItem";
import CartDeleteModal from "../components/CartDeleteModal";
import { useTheme } from "styled-components";

function CartPage(props) {
  const [cartInfo, setCartInfo] = useState(getCartItems());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const updatedCartInfo = getCartItems();
    setCartInfo(updatedCartInfo);

    const totalCount = updatedCartInfo.reduce(
      (total, item) => total + item.counter,
      0
    );
    setTotalItems(totalCount);
  }, [totalItems]);

  const totalPrice = () => {
    return cartInfo.reduce((total, item) => {
      return total + item.counter * Math.round(item.price);
    }, 0);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateTotalItems = (newTotalItems) => {
    setTotalItems(newTotalItems);
  };

  const onConfirm = () => {
    const updatedCartInfo = getCartItems();

    setCartInfo(updatedCartInfo);

    const totalCount = updatedCartInfo.reduce(
      (total, item) => total + item.counter,
      0
    );
    setTotalItems(totalCount);
    removeCartItems();
  };

  return (
    <div className={`${isDarkMode ? "" : styles.lightMode}`}>
      <Nav totalItemsProp={totalItems} />
      <section>
        <section className="sectionInner">
          <div className="category">
            <ul>
              <li>홈</li>
              <li>&nbsp; &gt; 장바구니</li>
            </ul>
          </div>
          <div className={styles.notThing}>
            {cartInfo.length < 1 && (
              <div>
                <h1>장바구니에 물품이 없습니다.</h1>
                <Link className="btn" to={"/"}>
                  담으러 가기
                </Link>
              </div>
            )}
            <div className={styles.cartContainer}>
              <div className={styles.cartContainerInner}>
                <div>
                  {cartInfo
                    .filter((item) => item.counter > 0)
                    .map((item, index) => (
                      <CartItem
                        key={index}
                        title={item.title}
                        imageUrl={item.image}
                        price={item.price}
                        cartInfo={cartInfo}
                        setTotalItems={updateTotalItems}
                        isDarkMode={isDarkMode}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className={styles.totalDiv}>
              <div></div>
              <div>
                <span>총 : ${totalPrice()}</span>
                <button className="btn" onClick={openModal}>
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      {isModalOpen && (
        <CartDeleteModal closeModal={closeModal} onConfirm={onConfirm} />
      )}
      <Footer />
    </div>
  );
}

export default CartPage;
