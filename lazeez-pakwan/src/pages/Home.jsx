import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>Welcome to lazeez pakwan</h1>
          <p>
            Authentic vegetarian and non-vegetarian Indian cuisine. Prepared
            fresh and with care.
          </p>

          <div className="home-hero-buttons">
            <a href="/order">Order Now</a>
            <a href="/catering">Catering</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
