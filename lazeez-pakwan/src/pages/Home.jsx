import { Link } from "react-router-dom";
import "./Home.css";
import backgroundImage from "../assets/backgroundImage.jpeg";

function Home() {
  return (
    <main className="home">
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="home-hero-content">
          <h1>Welcome to Lazeez Pakwan</h1>
          <p>
            Authentic vegetarian and non-vegetarian Indian cuisine. Prepared
            fresh and with care.
          </p>

          <div className="home-hero-buttons">
            <Link to="/order">Order Now</Link>
            <Link to="/catering">Catering</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
