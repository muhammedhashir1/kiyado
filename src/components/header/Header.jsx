import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import styles from "./Header.module.css";
import logo from "../../assets/logo-kiyado.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Kiyado Logo" />
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search products..." className={styles.searchInput} />
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          <IoMdHome />
          Home
        </Link>
        <Link to="/products" className={styles.navLink}>
          <AiFillProduct />
          Products
        </Link>
        <Link to="/cart" className={styles.navLink}>
          <FaShoppingCart /> Cart
        </Link>
        <Link to="/login" className={styles.navLink}>
          <FaUser /> Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
