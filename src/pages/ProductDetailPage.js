import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getProducts from "../api";
import styles from "./ProductDetailPage.module.css";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Rating from "../components/Rating";
import { addToCart } from "../cart.js";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const products = await getProducts();
        const selectedProduct = products.find(
          (product) => product.id === parseInt(productId)
        );

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          throw new Error("상품을 찾을 수 없습니다");
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchProductDetail();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product);
    setTotalItems((prevTotalItems) => prevTotalItems + 1);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav totalItemsProp={totalItems} />
      <section>
        <section className="sectionInner">
          <div className="category">
            <ul>
              <li>홈</li>
              <li>&nbsp; &gt; {product.title}</li>
            </ul>
          </div>
          <div className={styles.detailContainer}>
            <figure>
              <img
                src={product.image}
                alt={product.id}
                className={styles.productImage}
              />
            </figure>
            <div className={styles.description}>
              <h2>
                {product.title}
                <span>New</span>
              </h2>
              <p>{product.description}</p>
              <div className={styles.review}>
                <Rating value={product.rating.rate} />
                &nbsp; {product.rating.rate}
                <span>&nbsp;&nbsp;/ </span>
                <div className={styles.participants}>
                  {product.rating.count} 참여
                </div>
              </div>
              <p className={styles.price}>${product.price}</p>
              <div className={styles.cardActions}>
                <button className="btn btnPrimary" onClick={handleAddToCart}>
                  장바구니에 담기
                </button>
                <Link className="btn btnOutline" to="/cart">
                  장바구니로 이동
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
