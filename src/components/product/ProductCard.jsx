import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>

      <button className={styles.addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
