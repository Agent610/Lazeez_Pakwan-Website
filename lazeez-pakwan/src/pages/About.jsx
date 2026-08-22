import { Link } from "react-router-dom";
import "./About.css";

import MuttonCurry from "../assets/Mutton-Curry.jpeg";
import CheeseTomato from "../assets/Cheese-Tomato.jpeg";
import IdliSambar from "../assets/Idli-Sambar.jpeg";
import ChannaMasala from "../assets/Channa-Masala.jpeg";
import BhindiMasala from "../assets/Bhindi-Masala.jpeg";
import ChickenBiryani from "../assets/Chicken-Biryani.jpeg";

function About() {
  const reasons = [
    "Freshly prepared vegetarian and non-vegetarian Indian cuisine",
    "Catering for events of all sizes",
    "Made fresh",
    "Friendly, personal service",
    "Traditional Indian flavors",
  ];

  return (
    <main className="about">
      <section>
        <h1>About Lazeez Pakwan</h1>

        <p>
          Fresh Vegetarian and Non-Vegetarian Indian cuisine prepared fresh and
          with care whether it's for a special occasion like birthdays, weddings
          & anniversaries, graduations, or even a simple day. We present
          delicious Indian food that everyone can enjoy.
        </p>
      </section>

      <section>
        <h2>Our story</h2>

        <p>
          Lazeez Pakwan was created with one goal: To make authentic Indian food
          that brings the flavors of India to families, friends, and
          communities.
        </p>

        <p>
          With 10 years of professional cooking experience, every dish is
          prepared with care and attention to the perfect combination of spices
          and flavors.
        </p>

        <p>
          Lazeez Pakwan is dedicated to prepare fresh, flavorful vegetarian and
          non-vegetarian Indian cuisine for families, friends, and communities.
          Every order is made with care and prepared fresh for your special
          occassion or just night in.
        </p>
      </section>

      <section>
        <h2>What makes our Food different ?</h2>
        <p>
          We focus on creating authentic Indian food with the perfect balance of
          spices and flavors inspired by the food of India.
        </p>
      </section>

      <section>
        <h2>Family Recipes & Traditions</h2>
        <p>
          Some of our family favorites include: Cheese Tomato and Butter
          Chicken. Our Butter Chicken can also be prepared with goat meat.
        </p>
      </section>
      <section>
        <h2>Our Mission</h2>

        <p>
          Our goal is to provide delicious vegetarian and non-vegetarian Indian
          meals made with quality ingredients and served with warm, friendly
          customer service.
        </p>
      </section>
      <section>
        <h2>Why choose Lazeez Pakwan ?</h2>

        <ul>
          {reasons.map((reasons) => (
            <li key={reasons}>{reasons}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Our Food</h2>

        <div className="about-gallery">
          <div className="gallery-item">
            <img src={MuttonCurry} alt="Mutton Curry" />
            <h3>Mutton Curry</h3>
          </div>
        </div>

        <div className="about-gallery">
          <div className="gallery-item">
            <img src={CheeseTomato} alt="Chesse Tomato" />
            <h3>Cheese Tomato</h3>
          </div>
        </div>

        <div className="about-gallery">
          <div className="gallery-item">
            <img src={IdliSambar} alt="Idli Sambar" />
            <h3>Idli Sambar</h3>
          </div>
        </div>

        <div className="about-gallery">
          <div className="gallery-item">
            <img src={ChannaMasala} alt="Channa Masala" />
            <h3>Channa Masala</h3>
          </div>
        </div>

        <div className="about-gallery">
          <div className="gallery-item">
            <img src={BhindiMasala} alt="Bhindi Masala" />
            <h3>Bhindi Masala</h3>
          </div>
        </div>

        <div className="about-gallery">
          <div className="gallery-item">
            <img src={ChickenBiryani} alt="Chicken Biryani" />
            <h3>Chicken Biryani</h3>
          </div>
        </div>
      </section>

      <section>
        <h2>Ready to Plan Your Next Event ?</h2>

        <p>
          Whether you're celebrating with your family, friends, or even
          co-workers, we'd love to help make your event memorable. From our
          Mutton Curry Fish Fry and Channa Masala.
        </p>

        <Link to="/catering">Request Catering</Link>
      </section>
    </main>
  );
}

export default About;
