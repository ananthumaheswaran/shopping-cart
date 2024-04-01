import ProductDataFetch from "../../services/ProductDataFetch";

const Men = ({}) => {
  const category = `men's clothing`;
  return (
    <div className="productPage">
      <ProductDataFetch category={category} />
    </div>
  );
};

export default Men;
