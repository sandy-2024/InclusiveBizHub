
import Navbar from "./Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SocialCauses from "./components/SocialCauses";
import backgroundImage from "../src/assets/home2.png";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    marginTop: "0px",
    backgroundPosition: 'top',
    opacity: 1, // 50% opacity
  };

  return (
    <>
    <div style={backgroundStyle}> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path="/SocialCauses" element={<SocialCauses />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
