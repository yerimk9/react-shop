import styles from "./Footer.module.css";

import Visa from "../assets/cards/visa.svg";
import Mastercard from "../assets/cards/mastercard.svg";
import AmericanExpress from "../assets/cards/americanExpress.svg";
import PayPal from "../assets/cards/paypal.svg";
import DinersClub from "../assets/cards/dinersClub.svg";
import Discover from "../assets/cards/discover.svg";
import FaceBook from "../assets/socialMedia/facebook.svg";
import Instagram from "../assets/socialMedia/instagram.svg";
import GitHub from "../assets/socialMedia/github.svg";
import { useTheme } from "styled-components";

const cardList = [
  Visa,
  Mastercard,
  AmericanExpress,
  PayPal,
  DinersClub,
  Discover,
];

const linkList = [
  {
    name: FaceBook,
    url: "https://www.facebook.com/0base",
  },
  {
    name: Instagram,
    url: "https://www.instagram.com/zerobase.official/",
  },
  {
    name: GitHub,
    url: "https://github.com/oinochoe",
  },
];

export default function Footer() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className={`${styles.footer} ${isDarkMode ? "" : styles.lightMode}`}>
      <div className={styles.title}>
        <a
          href="https://zero-base.co.kr"
          target="_blank"
          rel="noopener noreferrer"
        >
          제로베이스
        </a>
      </div>
      <ul className={styles.cardList}>
        {cardList.map((card) => (
          <li key={card}>
            <img src={card} alt={card} />
          </li>
        ))}
      </ul>
      <div className={styles.socialMediaLinks}>
        {linkList.map(({ name, url }, index) => (
          <a href={url} key={index}>
            <img src={name} alt={name} />
          </a>
        ))}
      </div>
      <div>
        <p>Copyright © 2022 Zero Base</p>
      </div>
    </div>
  );
}
