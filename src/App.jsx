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

function App() {
  const location = useLocation();

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    marginTop: "0px",
    backgroundPosition: 'top',
    opacity: 1, // 50% opacity
  };

  const showHeaderFooter = !['/userlogin'].includes(location.pathname);

  return (
    <div style={backgroundStyle}> 
      {showHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/SocialCauses" element={<SocialCauses />} />
        <Route path="/userlogin" element={<Userlogin />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
