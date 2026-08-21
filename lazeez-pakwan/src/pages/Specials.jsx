import "./Specials.css";

function Specials() {
  return (
    <main className="specials">
      <section className="specials-header">
        <h1>Weekend Specials</h1>

        <p>Join us Saturday and Sunday for our special weekend dishes.</p>
      </section>

      <section className="specials-days">
        <h2>Available Saturday & Sunday</h2>

        <div className="specials-items">
          <div className="special-item">
            <h3>Veg Manchurian</h3>
            <p>A flavorful Indo-Chinese vegetarian favorite.</p>
          </div>
          <div className="special-item">
            <h3>Fried Rice</h3>
            <p>
              Freshly prepared fried rice, perfect alongside our weekend
              special.
            </p>
          </div>
        </div>
      </section>

      <section className="specials-order">
        <h2>Want to Order ?</h2>
        <p>Please contact Lazeez Pakwan in advance to place your order.</p>
        <p>You can order through Instagram or contact us directly.</p>
      </section>
    </main>
  );
}
