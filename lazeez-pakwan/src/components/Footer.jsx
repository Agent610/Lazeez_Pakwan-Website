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

          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/specials">Specials</a>
          <a href="/catering">Catering</a>
          <a href="/order">Order</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Monday-Friday</p>
          <p>9:00 AM-5:00 PM</p>

          <p>
            Message us on Instagram for orders and inquiries please DM 1-2 days
            in advance anywhere between Monday-Friday 9AM-5PM
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lazeez Pakwan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
