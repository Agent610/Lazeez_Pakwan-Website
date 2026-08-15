import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Lazeez Pakwan
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink to="/specials" onClick={() => setMenuOpen(false)}>
              Specials
            </NavLink>
          </li>

          <li>
            <NavLink to="/catering" onClick={() => setMenuOpen(false)}>
              Catering
            </NavLink>
          </li>

          <li>
            <NavLink to="/order" onClick={() => setMenuOpen(false)}>
              Order
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
