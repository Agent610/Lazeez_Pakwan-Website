import "./Menu.css";

function Menu() {
  return (
    <main className="menu">
      <section>
        <h1>Lazeez Pakwan</h1>
        <p>Indian Catering Menu</p>
      </section>

      <section>
        <h2>Appetizers</h2>

        <div className="menu-section">
          <div className="menu-item">
            <h3>Veg Pakoras</h3>
            <p>Vegetable Fritters</p>
            <span>$25</span>
          </div>

          <div className="menu-item">
            <h3>Chicken Pakoras</h3>
            <p>Chicken Fritters</p>
            <span>$28</span>
          </div>

          <div className="menu-item">
            <h3>Lasuni Gobi</h3>
            <p>Fried Indian Cauliflower</p>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Veg Manchurian</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Amritsari Fish Fry</h3>
            <p>8 pcs</p>
            <span>$30</span>
          </div>

          <div className="menu-item">
            <h3>Tandoori Chicken</h3>
            <span>$25</span>
          </div>

          <div className="menu-item">
            <h3>Dry Coriander Chicken</h3>
            <p>Indo-Chinese Style</p>
            <span>$25</span>
          </div>

          <div className="menu-item">
            <h3>Chilli Chicken</h3>
            <span>$25</span>
          </div>

          <div className="menu-item">
            <h3>Chole Poori</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Idli Sambar</h3>
            <span>$15</span>
          </div>

          <div className="menu-item">
            <h3>Veg Noodles</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Chicken Noodles</h3>
            <span>$22</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Vegetarian Main Course</h2>

        <div className="menu-section">
          <div className="menu-item">
            <h3>Cheese Tomato</h3>
            <span>$25</span>
          </div>

          <div className="menu-item">
            <h3>Kadhai Paneer</h3>
            <span>$25</span>
          </div>

          <div className="menu-item">
            <h3>Paneer Matar</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Chana Masala</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Punjabi Kadhi</h3>
            <span>$25</span>
          </div>

          <div className="menu-item">
            <h3>Yellow Dal</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Dal Makhani</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Aloo Gobi</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Aloo Matar</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Nutrela Chilli</h3>
            <p>Soybean Chunks</p>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Eggplant</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Rajma</h3>
            <p>Kidney Beans</p>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Chickpeas</h3>
            <span>$20</span>
          </div>

          <div className="menu-item">
            <h3>Masala Bhindi</h3>
            <p>Okra</p>
            <span>$25</span>
          </div>

          <div className="menu-item">
            <h3>Shahi Paneer</h3>
            <span>$22</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Non-Vegetarian Main Course</h2>

        <div className="menu-section">
          <div className="menu-item">
            <h3>Chicken Curry</h3>
            <span>$25</span>
          </div>

          <div className="menu-item">
            <h3>Butter Chicken</h3>
            <span>$28</span>
          </div>

          <div className="menu-item">
            <h3>Palak Chicken</h3>
            <p>Spinach Chicken</p>
            <span>$28</span>
          </div>

          <div className="menu-item">
            <h3>Fish Curry</h3>
            <span>$30</span>
          </div>

          <div className="menu-item">
            <h3>Mutton Curry</h3>
            <p>Lamb or Goat Available</p>
            <span>$30</span>
          </div>

          <div className="menu-item">
            <h3>Kadhai Chicken</h3>
            <span>$28</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Breads</h2>

        <div className="menu-section">
          <div className="menu-item">
            <h3>Roti</h3>
            <p>Each</p>
            <span>$2</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Rice & Biryani</h2>

        <div className="menu-section">
          <div className="menu-item">
            <h3>Jeera Rice</h3>
            <span>$15</span>
          </div>

          <div className="menu-item">
            <h3>Veg Biryani</h3>
            <span>$22</span>
          </div>

          <div className="menu-item">
            <h3>Chicken Biryani</h3>
            <span>$28</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Desserts</h2>

        <div className="menu-section">
          <div className="menu-item">
            <h3>Kheer</h3>
            <p>Rice Pudding</p>
            <span>$20</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Menu;
