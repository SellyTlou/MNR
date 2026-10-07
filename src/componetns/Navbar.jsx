import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo2 from "../assets/logo2.png";
import "./components.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setServicesOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="main-navbar">

      {/* Top Contact Bar */}
      <div className="topBar">
        <div className="topBar-container">
          <Link to="/contact" className="top-nav-item">
            <span>
              <i className="fas fa-envelope"></i>
              malindile@gmail.com
            </span>
          </Link>

          <Link to="/contact" className="top-nav-item">
            <span>
              <i className="fas fa-phone"></i>
              +27 82 123 4567
            </span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mainNav">
        <div className="mainNav-container">

          {/* Logo */}
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img src={logo2} alt="MNR logo" className="navbar-logo" />
            <span className="brand-name">MNR</span>
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation */}
          <div className={`main-menu ${menuOpen ? "show" : ""}`}>

            <NavLink to="/" end className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className={`nav-dropdown ${servicesOpen ? "open" : ""}`}
              ref={dropdownRef}
            >
              <button
                type="button"
                className="nav-link dropdown-toggle"
                onClick={toggleServices}
                aria-expanded={servicesOpen}
              >
                Services
                <i className="fas fa-chevron-down dropdown-caret"></i>
              </button>

              <div className="dropdown-menu">
                <NavLink
                  to="/services/roofing"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Roofing
                </NavLink>
                <NavLink
                  to="/services/cladding"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Cladding
                </NavLink>
                <NavLink
                  to="/services/carpentry"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Carpentry
                </NavLink>
              </div>
            </div>

            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
              Projects
            </NavLink>

            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;