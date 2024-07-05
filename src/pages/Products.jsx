import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/product/ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products");
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(result.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProducts();
    fetchCategories();
    setLoading(false);
  }, []);

  const handleCategoryChange = async (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setLoading(true);
    if (category) {
      try {
        const result = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    } else {
      try {
        const result = await axios.get("https://fakestoreapi.com/products");
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    setLoading(false);
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
