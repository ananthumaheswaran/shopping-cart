import ProductData from "../fetch-data/ProductData";

const FeaturedProducts = () => {
  const limit = "4";
  return (
    <div>
      <ProductData limit={limit} />
    </div>
  );
};

export default FeaturedProducts;
