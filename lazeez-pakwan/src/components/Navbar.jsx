import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Lazeez Pakwan
        </NavLink>

        <ul className="navbar-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>

          <li>
            <NavLink to="/specials">Specials</NavLink>
          </li>

          <li>
            <NavLink to="/catering">Catering</NavLink>
          </li>

          <li>
            <NavLink to="/order">Order</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
