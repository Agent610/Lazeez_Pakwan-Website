function Order() {
  return (
    <main>
      <section>
        <h1>Place an Order</h1>

        <p>
          We are always ready and love to make fresh Indian food both vegetarian
          and non-vegetarian. Please contact us to place your order.
        </p>

        <button>Order on Instagram</button>
      </section>

      <section>
        {/* <h2>How to Order</h2> */}
        <ol>
          <li>Send us a message on Instagram or use our contact form.</li>

          <li>Tell us what you'd like to order.</li>

          <li>
            Please place your order at least 1-2 days in advance this is to
            ensure freshness of your order. If catering please place your order
            at least 2-4 days in advance.
          </li>

          <li>
            We'll confirm your order and arrange pickup or deliver (when
            available).
          </li>
        </ol>
      </section>

      <section>
        <h2>Fresh Food Matters</h2>

        <p>
          Our dishes are prepared fresh. Our quantities are good for their
          price. To ensure the best quality, please place your order 1-2 days
          before you need it. For catering please give us 2-4 days.
        </p>
      </section>

      <section>
        <h2>Order Through Instagram</h2>

        <p>
          The fastest way to place an order is by sending us a direct message on
          Instagram.
        </p>

        {/* <a href="Instagram link" target="_blank" rel="noreferrer"></a> */}
        <button>Message Us on Instagram</button>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>

        <h3>How much notice do I need ?</h3>
        <p>Please order 1-2 days in advance.</p>

        <h3>Can I place a catering order ?</h3>
        <p>
          Yes ! We cater events of all sizes. We only ask that you place your
          cater request 2-4 days in advance.
        </p>

        <h3>Do you prepare fresh food ?</h3>
        <p>Yes. Every order is prepared fresh.</p>
      </section>
    </main>
  );
}

export default Order;
