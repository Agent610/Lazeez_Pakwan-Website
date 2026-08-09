//NOT finished yet
function About() {
  const reasons = [
    "Freshly prepared vegetarian and non-vegetarian Indian cuisine",
    "Catering for events of all sizes",
    "Made fresh",
    "Friendly, personal service",
    "Traditional Indian flavors",
  ];

  return (
    <main>
      <section>
        <h1>About Lazeez Pakwan</h1>

        <p>
          Fresh Vegetarian and Non-Vegetarian Indian cuisine prepared fresh and
          with care whether it's for a special occasion like birthdays, weddings
          & anniversaries, graduations, or even a simple day. We present
          delicious Indian food that everyone can enjoy.
        </p>
      </section>
      ;
      <section>
        <h2>Our story</h2>

        <p>
          Lazeez Pakwan is dedicated to prepare fresh, flavorful vegetarian and
          non-vegetarian Indian cuisine for families, friends, and communities.
          Every order is made with care and prepared fresh for your special
          occassion or just night in.
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
      ;
      <section>
        <h2>Ready to Plan Your Next Event ?</h2>

        <p>
          Whether you're celebrating with your family, friends, or even
          co-workers, we'd love to help make your event memorable. From our
          (Best non-veg dish) + (Best Veg dish).[Full in the blanks]
        </p>

        <button>Request Catering</button>
      </section>
      ;
    </main>
  );
}

export default About;
// Ask Geeta masi the following
// Why did you start Lazeez Pakwan?
// How long have you been cooking professionally?
// What inspired the name "Lazeez Pakwan"?
// What makes your food different?
// What is your favorite dish to prepare?
// Do you have a family recipe or tradition you'd like to share?
