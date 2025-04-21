import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setUser(JSON.parse(auth));
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-header">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand d-flex align-items-center text-white fw-bold"
          to={user?.id ? "/dashboard" : "/"}
        >
          <img
            src={logo}
            alt="BizzMantra Logo"
            className="img-fluid rounded me-2"
            style={{ height: "40px" }}
          />
          {/* BizzMantra */}
        </NavLink>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Center: Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/industries">Industries</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/Clients">Our Clients</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
