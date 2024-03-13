import FeaturedProducts from "../components/FeaturedProducts";
import NavBar from "../components/NavBar";

const Shop = () => {
  return (
    <>
      <NavBar />
      <div className="shop-page-section-two">
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Shop;
