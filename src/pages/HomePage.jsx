import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="home-section-one">
        <div className="home-sub-section">
          <h1 className="title-name">URBAN STORE</h1>
          <p className="title-para">
            A fictional online store showcasing diverse products with fake data
            <br />
            generated via Fake Store API, offering a simulated shopping
            experience,
            <br />
            ideal for practicing web development and API integration.
          </p>
          <div className="btn-container">
            <Link to="/shop/allproducts">
              <button className="btn-shop">Shop</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="home-section-two">
        <h1 className="section-two-heading">Featured Products</h1>
        <div className="featuredProducts-container">
          <FeaturedProducts />
        </div>

        <div className="home-section-three">
          <div>
            <h1 className="section-three-heading">
              Free Shipping! <br />
            </h1>
            <p className="section-three-para">
              Go and grab the products you want!
            </p>
            <div className="btn-container">
              <Link to="/shop/allproducts">
                <button className="btn-shop-now">Shop Now!</button>
              </Link>
            </div>
          </div>

          <div>
            <img
              src="/src/assets/images/home-delivery.jpg"
              alt="delivery van image"
              className="shipping-van-image"
            />
          </div>
        </div>
        <div className="home">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
