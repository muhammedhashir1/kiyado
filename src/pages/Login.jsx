import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 6000);
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
      {showPopup && (
        <div className={styles.popup}>
          <p>Not Integrated, Try Again Later!!!</p>
        </div>
      )}
    </div>
  );
};

export default Login;
