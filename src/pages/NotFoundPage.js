import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFoundPage(props) {
  return (
    <div>
      <Nav />
      <section className={styles.notFoundContainer}>
        <section className="sectionInner">
          <h1>404</h1>
          <p>페이지를 찾을 수 없습니다.</p>
          <div className={styles.btnContainer}>
            <Link to={"/"} className="btn">
              메인으로
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
