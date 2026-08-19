//TO DO
//Get the instagram link

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const text = `Hello Lazeez Pakwan!

    Name: ${name}
    Phone: ${phone}

    Message: ${message}`;
    const phoneNumber = "14752188753";

    window.location.href = `sms:+${phoneNumber}?body=${encodeURIComponent(text)}`;
  }

  return (
    <main>
      <section>
        <h1>Contact</h1>

        <p>
          Have questions about our menu, catering, or orders ? We would love to
          hear from you.
        </p>
      </section>

      <section>
        <h2>Connect with us</h2>
        <div>
          <h3>Instagram</h3>
          <p>Message us directly for orders, catering, and questions.</p>
          {/* {Add Instagram Link} */}
          <button type="button">Message Us on Instagram</button>
        </div>

        <div>
          <h3>Telephone number</h3>
          <p>(475-218-8753) Call or text me for general inquiries.</p>
        </div>
      </section>

      <section>
        <h2>Business Hours</h2>
        <p>Monday-Friday</p>
        <p>9:00am-5:00pm</p>
        <p>
          Orders are prepared by request. Please contact us 1-2 days in advance.
        </p>
      </section>

      <section>
        <h2>Send Us A Message</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your Phone Number"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
