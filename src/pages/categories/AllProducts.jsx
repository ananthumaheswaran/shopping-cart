import ProductDataFetch from "../../services/ProductDataFetch";
const AllProducts = () => {
  return (
    <div className="productPage">
      <ProductDataFetch />
    </div>
  );
};

export default AllProducts;
