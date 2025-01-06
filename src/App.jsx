import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import CallToAction from "./components/CallToAction";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import IntroCopySection from "./components/IntroCopySection";
import Login from "./pages/LoginSection";
import Register from "./pages/Register";
import Dash from "./components/Dash";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (credentials) => {
    try {
      // Get stored credentials
      const storedCredentialsStr = localStorage.getItem("userCredentials");

      console.log("Login attempt with:", credentials);
      console.log("Stored credentials string:", storedCredentialsStr);

      // Check if there are any stored credentials
      if (!storedCredentialsStr) {
        alert("No registered user found. Please register first.");
        return;
      }

      // Parse stored credentials
      let storedCredentials;
      try {
        storedCredentials = JSON.parse(storedCredentialsStr);
        console.log("Parsed stored credentials:", storedCredentials);
      } catch (e) {
        console.error("Failed to parse stored credentials:", e);
        alert(
          "There was an error with your stored credentials. Please register again."
        );
        return;
      }

      // Compare credentials
      if (
        !storedCredentials ||
        !storedCredentials.email ||
        !storedCredentials.password
      ) {
        alert("Invalid stored credentials. Please register again.");
        return;
      }

      console.log("Comparing:");
      console.log("Input email:", credentials.email);
      console.log("Stored email:", storedCredentials.email);
      console.log("Input password:", credentials.password);
      console.log("Stored password:", storedCredentials.password);

      if (
        credentials.email === storedCredentials.email &&
        credentials.password === storedCredentials.password
      ) {
        // Successful login
        console.log("Login successful!");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        window.location.replace("/dashboard");
      } else {
        // Invalid credentials
        console.log("Login failed - credentials don't match");
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const handleRegister = (credentials) => {
    try {
      // Store the credentials
      localStorage.setItem(
        "userCredentials",
        JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        })
      );
      alert("Registration successful! Please login.");
      window.location.replace("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  const MainLayout = ({ children }) => (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );

  const AuthLayout = ({ children }) => (
    <div className="auth-container">{children}</div>
  );

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <MainLayout>
                  <HeroSection
                    onLogin={() => window.location.replace("/login")}
                    onSignUp={() => window.location.replace("/register")}
                  />
                </MainLayout>
              )
            }
          />

          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <AuthLayout>
                  <Login onLogin={handleLogin} />
                </AuthLayout>
              )
            }
          />

          <Route
            path="/register"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <AuthLayout>
                  <Register onRegister={handleRegister} />
                </AuthLayout>
              )
            }
          />

          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <MainLayout>
                  <Dash onLogin={() => {}} onSignUp={() => {}} />
                  <FeatureSection />
                  <IntroSection />
                  <IntroCopySection />
                  <CallToAction />
                  <PricingSection />
                </MainLayout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
