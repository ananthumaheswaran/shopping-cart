import Products from "../components/Products";
import NavBar from "../components/NavBar";

const Shop = () => {
  return (
    <>
      <NavBar />
      <div className="shop-page-section-two">
        <Products />
      </div>
    </>
  );
};

export default Shop;
