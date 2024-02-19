import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

// Import the page components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Web3Stories from "./pages/Web3stories";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.Main}> {/* Changed from Container to div */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/web3stories" element={<Web3Stories />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
