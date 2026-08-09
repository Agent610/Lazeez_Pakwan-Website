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
            <NavLink to="/">Menu</NavLink>
          </li>

          <li>
            <NavLink to="/">Specials</NavLink>
          </li>

          <li>
            <NavLink to="/">Catering</NavLink>
          </li>

          <li>
            <NavLink to="/">Order</NavLink>
          </li>

          <li>
            <NavLink to="/">About</NavLink>
          </li>

          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
