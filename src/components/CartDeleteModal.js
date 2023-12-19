import React from "react";
import styles from "./CartDeleteModal.module.css";
import { removeCartItems } from "../cart";

function CartDeleteModal({ closeModal, onConfirm, isDarkMode }) {
  const removeAndClose = () => {
    removeCartItems();
    closeModal();
    onConfirm();
  };

  return (
    <div
      className={`${styles.modalContainer} ${
        isDarkMode ? "" : styles.lightMode
      }`}
    >
      <h1>정말로 구매하시겠습니까?</h1>
      <p>장바구니의 모든 상품들이 삭제됩니다.</p>
      <div className={styles.modalAction}>
        <button className="btn btnPrimary" onClick={removeAndClose}>
          네
        </button>
        <button
          className={`btn ${isDarkMode ? "btnOutline" : "btnOutlineWithLight"}`}
          onClick={closeModal}
        >
          아니오
        </button>
      </div>
    </div>
  );
}

export default CartDeleteModal;
