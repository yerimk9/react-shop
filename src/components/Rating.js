import React from "react";
import styles from "./Rating.module.css";

const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false }) {
  const className = `${styles.RatingStar} ${selected ? styles.selected : ""}`;

  return <span className={className}>⭑</span>;
}

function Rating({ value = 0 }) {
  return (
    <div className={styles.RatingStar}>
      {RATINGS.map((rating) => (
        <Star key={rating} selected={value >= rating} rating={value} />
      ))}
    </div>
  );
}

export default Rating;
