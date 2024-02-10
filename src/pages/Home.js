// Importing necessary dependencies and styles
import React from 'react';
import { Link } from 'react-router-dom'; // React Router's Link component for navigation
import styles from '../assets/css/Home.module.css'; // CSS module for styling

/**
 * Home component serves as the landing page of the application.
 * It provides a welcoming message to visitors.
 */
const Home = () => {
  return (
    // Container for the Home component, styled with CSS modules for consistent theming
    <div className={styles.home}>
      {/* Header section to display the main title or welcome message */}
      <header className={styles.header}>
        <h1>Welcome to Our Website!</h1>  
      </header> 
    </div>
  );
};

export default Home;

