import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import styles from "../assets/css/NavBar.module.css"; // Import styles specific to NavBar

// The NavBar component handles the navigation bar of our app
const NavBar = () => {
  // State to manage if the navigation menu is expanded or collapsed
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    // The navigation bar container
    <nav className={styles.navbar}>
      {/* Link and logo for the brand */}
      <Link to="/" className={styles.brand}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>

      {/* Toggle button (hamburger icon) for small screens */}
      <button
        className={`${styles.toggler} ${isNavExpanded ? styles.hide : ''}`}
        onClick={() => setIsNavExpanded(!isNavExpanded)} // Toggles the navigation menu
        aria-label="Toggle navigation"
      >
        ☰ {/* The icon itself */}
      </button>

      {/* The navigation menu items, shown or hidden based on isNavExpanded */}
      <div className={`${styles.navMenu} ${isNavExpanded ? styles.show : ""}`}>
        {/* Navigation link to the Home page */}
        <Link to="/" className={styles.navItem} onClick={() => setIsNavExpanded(false)}>
          Home
        </Link>
        {/* More navigation links */}
        <Link to="/signin" className={styles.navItem} onClick={() => setIsNavExpanded(false)}>
          Sign in
        </Link>
        <Link to="/signup" className={styles.navItem} onClick={() => setIsNavExpanded(false)}>
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
