import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setUser(JSON.parse(auth));
    }
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "transparent", 
        zIndex: 50,
      }}
    >
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
        </NavLink>

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
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav m-2 mb-4 mb-lg-0 ms-auto">
            <li className="nav-item mx-3">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link text-white" to="/industries">
                Industries
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link text-white" to="/our-clients">
                Our Clients
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
