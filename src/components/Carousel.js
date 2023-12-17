import React, { useState } from "react";
import DigitalImg from "../assets/img_shop_digital.jpeg";
import FashionImg from "../assets/img_shop_fashion.jpeg";
import GroceryImg from "../assets/img_shop_grocery.jpeg";
import styles from "./Carousel.module.css";
import { Link } from "react-router-dom";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <img src={item.imgSrc} alt="img" className={styles.carouselImg} />
            <div className={styles.carouselCaption}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>
                <Link to={item.link} className={styles.link}>
                  바로가기 ➞
                </Link>
              </p>
            </div>
          </div>
        ))}
        <button
          type="button"
          className={`${styles.carouselBtn} ${styles.carouselPrev}`}
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          type="button"
          className={`${styles.carouselBtn} ${styles.carouselNext}`}
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
      <div className={styles.carouselDots}>
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`${styles.carouselDot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

const carouselItems = [
  {
    imgSrc: FashionImg,
    title: "물빠진 청바지!",
    link: "/fashion",
    description: "이제 막 도착한 패션 청바지를 구경해 보세요.",
    captionPosition: "text-start",
  },
  {
    imgSrc: DigitalImg,
    title: "신속한 업무처리!",
    link: "/digital",
    description: "다양한 디지털 상품을 둘러보세요.",
    captionPosition: "",
  },
  {
    imgSrc: GroceryImg,
    title: "신선한 식품!",
    link: "/grocery",
    description: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
    captionPosition: "text-end",
  },
];

export default Carousel;
