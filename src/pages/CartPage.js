import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";
import { getCartItems } from "../constants/cart";
import CartItem from "../components/CartItem";
import CartDeleteModal from "../components/CartDeleteModal";

function CartPage(props) {
  const [cartInfo, setCartInfo] = useState(getCartItems());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const totalCount = cartInfo.reduce(
      (total, item) => total + item.counter,
      0
    );
    setTotalItems(totalCount);
    setCartInfo(getCartItems());
  }, [totalItems, cartInfo]);

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

  return (
    <div>
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
                  {cartInfo.map((item, index) => (
                    <CartItem
                      key={index}
                      title={item.title}
                      imageUrl={item.image}
                      price={item.price}
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
      {isModalOpen && <CartDeleteModal closeModal={closeModal} />}
      <Footer />
    </div>
  );
}

export default CartPage;
