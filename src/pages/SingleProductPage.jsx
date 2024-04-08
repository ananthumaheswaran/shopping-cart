import ProductData from "../fetch-data/ProductData";

const SingleProductPage = () => {
  const productId = 1;
  return (
    <div className="productPage">
      <ProductData id={productId} />
    </div>
  );
};

export default SingleProductPage;
