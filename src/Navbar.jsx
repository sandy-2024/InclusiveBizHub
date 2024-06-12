import React from "react";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAjrVb7JL78T5Q_moXZGsNIrbrkjl1gVfenzmrTSOCHka4ItVpWYzyjjU_ddpfnaV-yzadYLpp2DwWCeky1qF6QuXJFdSk5n9OicVJCyVtY0DfGzdNZlv2oc-1vbH07ikExeXOXVc6wYpHXRLi3nWK4UJMSrOGI7FluC3VyQaYe8Rv2jwLnsAv1pQFlusn/s320/Logo.png"
              alt="InclusiveBizHub"
              height={100}
              width={100}
              className="object-contain"
              
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                  Services
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/SocialCauses">
                  Social Causes
                </Link>
              </li>
            </ul>

            <div className="dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ paddingRight: "5rem" }}
              >
                Join us
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/registration">
                    Registration
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
