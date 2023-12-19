import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { useTheme } from "styled-components";

function NotFoundPage(props) {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div>
      <Nav />
      <section
        className={`${styles.notFoundContainer} ${
          isDarkMode ? "" : styles.lightMode
        }`}
      >
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
