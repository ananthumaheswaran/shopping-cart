import Products from "../components/Products";
import NavBar from "../components/NavBar";

const AllProducts = () => {
  return (
    <>
      <NavBar />
      <div className="shop-page-section-two">
        <Products />
      </div>
    </>
  );
};

export default AllProducts;
