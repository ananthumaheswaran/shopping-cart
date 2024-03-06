import FeaturedProducts from "../components/FeaturedProducts";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />

      <div className="home-image-container">
        <h1 className="title-name">FakeStore</h1>
        <p className="title-para">
          A fictional online store showcasing diverse products with fake data
          <br />
          generated via Fake Store API, offering a simulated shopping
          experience,
          <br />
          ideal for practicing web development and API integration.
        </p>
        <button className="btn-shop">Shop</button>
      </div>
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
