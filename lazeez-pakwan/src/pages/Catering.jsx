// Come back after you get answers to the questions you need to ask

<section>
  <h1>Catering</h1>

  <p>
    Fresh Indian vegetarian and non-vegetarian cuisine prepared for gatherings,
    celebrations, and special events.
  </p>

  <button>Request Catering</button>
</section>;

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

<section>
  <h2>Events We Cater</h2>

  {events.map((event) => (
    <div key={event}>{event}</div>
  ))}

  <p>Don't see your event listed ? No problem we will still cater it :D</p>
</section>;

<section>
  <h2>How It Works</h2>

  <ol>
    <li>Submit a catering request through our website or Instagram page.</li>

    <li>
      Please place your order at least 2-4 days in advance. This is to ensure
      you get the your order fresh.
    </li>

    <li>We'll confirm the details with you.</li>
  </ol>
</section>;

<form>
  <input type="text" placeholder="Full Name" />

  <input type="email" placeholder="Email Address" />

  <input type="date" />

  <textarea placeholder="Tell us about your event..."></textarea>

  <button>Submit Request</button>
</form>;

//Instagram Section

<section>
  <h2>Prefer Instagram ?</h2>
  <p>
    In the event you prefer contacting us via Instagram ? Sure no problem, you
    can send us a direct message via Instagram to discuss your catering needs.
  </p>

  <button>Message us on Instagram</button>
</section>;

// To do and find out Catering which cities? And is there a delivery charge | Information in a cater request | Do you provide utensils ? | Up to date menu
