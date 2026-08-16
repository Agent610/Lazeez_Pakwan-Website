// Come back after you get answers to the questions you need to ask
// NOT Finished yet
import "./Catering.css";

function Catering() {
  const events = [
    "Birthdays",
    "Weddings",
    "Baby Showers",
    "Corporate Events",
    "Family Gatherings",
    "Religious Events",
    "Holiday Parties",
    "Graduation Parties",
  ];

  return (
    <main>
      <section>
        <h1>Catering for Every Occasion</h1>
      </section>
      <section>
        <h2>How It Works</h2>

        <ol>
          <li>
            Submit a catering request through our website or Instagram page.
          </li>

          <li>
            Please place your order at least 2-4 days in advance. This is to
            ensure you get the your order fresh.
          </li>

          <li>We'll confirm the details with you.</li>
        </ol>
      </section>
      <section>
        <h2>Request Catering</h2>
      </section>
      <form className="catering-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="event">Event Type</label>
          <select id="event" name="event" required>
            <option value="">Select an Event</option>
            <option value="birthday">Birthday</option>
            <option value="wedding">Wedding</option>
            <option value="baby-shower">Baby Shower</option>
            <option value="corporate">Corporate Event</option>
            <option value="family-gathering">Family Gathering</option>
            <option value="religious">Religious Event</option>
            <option value="holiday">Holiday Party</option>
            <option value="graduation">Graduation Party</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Event Date</label>
          <input id="date" name="date" type="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            placeholder="Number of guests"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Tell Us About Your Event</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us what you are looking for..."
            required
          />
        </div>

        <button type="submit">Submit Catering Request</button>
      </form>

      <p>Don't see your event listed ? No problem we will still cater it! :D</p>
      <section>
        <h2>Prefer Instagram ?</h2>
        {/* Instagram Section (GET THE LINK) */}
        <p>
          In the event you prefer contacting us via Instagram ? Sure no problem,
          you can send us a direct message via Instagram to discuss your
          catering needs.
        </p>

        <button>Message us on Instagram</button>
      </section>
    </main>
  );
}

export default Catering;
// To do and find out Catering which cities? And is there a delivery charge | Information in a cater request | Do you provide utensils ? | Up to date menu
