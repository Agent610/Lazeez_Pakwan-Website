import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Lazeez Pakwan</h2>

          <p>
            Fresh vegetarian and non-vegetarian Indian cuisine freshly prepared
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links </h3>

          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/specials">Specials</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/order">Order</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Monday-Friday</p>
          <p>9:00 AM-5:00 PM</p>

          <p>
            Message us on Instagram for orders and inquiries please DM 1-2 days
            in advance anywhere between Monday-Friday 9AM-5PM
          </p>
          {/* Include Instagram link and button for it */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            Message Us on Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lazeez Pakwan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
