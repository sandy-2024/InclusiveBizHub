import React from 'react';
import Navbar from "./Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import SocialCauses from "./components/SocialCauses";
import backgroundImage from "../src/assets/home2.png";
import Userlogin from '../src/user/Userlogin';
import Mypart from '../src/user/Mypart';
import Myprofile from '../src/user/Myprofile';

function App() {
  const location = useLocation();
  const backgroundStyle = location.pathname === '/' || location.pathname === '/contact' || location.pathname === '/about' || location.pathname === '/login' || location.pathname === '/registration' || location.pathname === '/SocialCauses'? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    marginTop: "0px",
    backgroundPosition: 'top',
    opacity: 1, // 50% opacity
  } : {};

  return (
    <div style={backgroundStyle}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/registration"
          element={
            <>
              <Navbar />
              <Registration />
            </>
          }
        />
        <Route
          path="/SocialCauses"
          element={
            <>
              <Navbar />
              <SocialCauses />
            </>
          }
        />
        <Route
          path="/userlogin"
          element={
            <>
              <Userlogin />
            </>
          }
        />
        <Route
          path="/mypart"
          element={
            <>
              <Mypart />
            </>
          }
        />
        <Route
          path="/myprofile"
          element={
            <>
              <Myprofile />
            </>
          }
        />
      </Routes>
      {location.pathname!== '/userlogin' && location.pathname!== '/mypart' && <Footer />}
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;