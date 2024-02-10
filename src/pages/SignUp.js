// Importing React hooks for state management and Link for navigation.
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Used for SPA navigation without reloading the page.
import styles from '../assets/css/SignUp.module.css'; // Importing CSS module for styling.

/**
 * SignUp component for user registration.
 * It captures user email and password for account creation.
 */
const SignUp = () => {
  // State hooks to capture user inputs for email and password.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Handles the submission of the sign-up form.
   * Prevents the default form submission action and logs the input values.
   * This function can be extended to include actual sign-up logic, such as API calls.
   */
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload on form submission.
    console.log('Signing up with:', email, password);
    // Future implementation: API call for user registration and handle response.
  };

  return (
    // Main container for the SignUp component with applied styles.
    <div className={styles.signUp}> 
      <h1>Sign Up</h1>
      {/* Sign-up form with an onSubmit event handler to process form submission */}
      <form onSubmit={handleSubmit} className={styles.signUpForm}>
        {/* Input field for the email address */}
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates email state with user input.
            required // Makes this field mandatory to fill out.
          />
        </label>
        {/* Input field for the password */}
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Updates password state with user input.
            required // Makes this field mandatory to fill out.
          />
        </label>
        <button type="submit">Sign Up</button> {/* Button to submit the form */}
      </form>
      {/* Link to the SignIn page for users who already have an account */}
      <p>
        Already have an account? <Link to="/signin">Sign in here</Link>.
      </p>
    </div>
  );
};

export default SignUp; // Exports the SignUp component for use throughout the application.
