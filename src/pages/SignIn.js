// SignIn component for user authentication.
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Enables navigation without page reload.
import styles from '../assets/css/SignIn.module.css'; // Modular CSS for styling.

const SignIn = () => {
  // State hooks for managing user input.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action.
    console.log('Signing in with:', email, password); // Placeholder for authentication logic.
    // Future implementation: Redirect user after successful sign-in.
  };

  return (
    <div className={styles.signIn}> {/* Styling applied to the sign-in container */}
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.signInForm}>
        {/* Email and password input fields */}
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates the email state on change.
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Updates the password state on change.
            required
          />
        </label>
        <button type="submit">Sign In</button> {/* Submission button */}
      </form>
      {/* Link to the SignUp page for users without an account */}
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>.
      </p>
    </div>
  );
};

export default SignIn; // Exports the SignIn component for use in other parts of the app.
