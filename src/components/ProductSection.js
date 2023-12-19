import React, { useEffect, useState } from "react";
import styles from "./ProductSection.module.css";
import getProducts from "../api";
import { Link } from "react-router-dom";

function ProductSection({ size, category, children, isDarkMode }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();

        const filteredProducts = data.filter((product) => {
          const lowerCaseCategory = product.category.toLowerCase();
          const categories = category.toLowerCase().split(" ");
          return categories.every((word) => lowerCaseCategory.includes(word));
        });

        let selectedProducts;

        if (filteredProducts.length === 0) {
          // 필터링된 제품이 없으면 전체 제품 중에서 사이즈에 맞는 제품 선택
          selectedProducts = data
            .filter((product) =>
              product.category.toLowerCase().includes(category.toLowerCase())
            )
            .slice(0, size);
        } else {
          // 필터링된 제품이 있으면 해당 제품만 선택
          selectedProducts = filteredProducts.slice(0, size);
        }

        setProducts(selectedProducts);
      } catch (error) {
        throw new Error("상품 정보를 불러오는데 실패했습니다", error);
      }
    };
    fetchData();
  }, [size, category]);

  return (
    <section
      className={`${styles.productSection} ${
        isDarkMode ? "" : styles.lightMode
      }`}
    >
      <h2>{children}</h2>
      <ProductItems items={products} />
    </section>
  );
}

export default ProductSection;

function ProductItems({ items }) {
  return (
    <div className={styles.itemContainers}>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function ProductItem({ item }) {
  return (
    <Link to={`/product/${item.id}`} className={styles.itemContainer}>
      <figure className={styles.imgContainer}>
        <img src={item.image} alt="product" />
      </figure>
      <div className={styles.description}>
        <p className={styles.title}>{item.title}</p>
        <p>${Math.round(item.price)}</p>
      </div>
    </Link>
  );
}
