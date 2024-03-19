import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="home-section-one">
        <h1 className="title-name">FakeStore</h1>
        <p className="title-para">
          A fictional online store showcasing diverse products with fake data
          <br />
          generated via Fake Store API, offering a simulated shopping
          experience,
          <br />
          ideal for practicing web development and API integration.
        </p>
        <div className="btn-container">
          <Link to="shop">
            <button className="btn-shop">Shop</button>
          </Link>
        </div>
      </div>

      <div className="home-section-two">
        <h1 className="section-two-heading">Featured Products</h1>
        <div className="featuredProducts-container"></div>
      </div>
    </>
  );
};

export default HomePage;
