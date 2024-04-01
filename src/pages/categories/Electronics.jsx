import ProductDataFetch from "../../services/ProductDataFetch";

const Electronics = () => {
  const category = "electronics";
  return (
    <div className="productPageOne">
      <ProductDataFetch category={category} />
    </div>
  );
};

export default Electronics;
