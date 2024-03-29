import ProductDataFetch from "../services/ProductDataFetch";

const FeaturedProducts = () => {
  const limit = "4";
  return (
    <div>
      <ProductDataFetch limit={limit} />
    </div>
  );
};

export default FeaturedProducts;
