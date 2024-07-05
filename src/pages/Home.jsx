import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import styles from "./Home.module.css";
import banner from "../assets/banner.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=5");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to Kiyado E-commerce</h1>
      <img src={banner} alt="Kiyado Banner" className={styles.banner} />
      <div className={styles.featuredProducts}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.viewAllButtonContainer}>
        <Link to="/products" className={styles.viewAllButton}>
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
