import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/product/ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
    };

    const fetchCategories = async () => {
      const result = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(result.data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const handleCategoryChange = async (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category) {
      const result = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(result.data);
    } else {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <select value={selectedCategory} onChange={handleCategoryChange} className={styles.dropdown}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
