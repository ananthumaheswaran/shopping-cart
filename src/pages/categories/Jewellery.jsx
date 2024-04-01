import ProductDataFetch from "../../services/ProductDataFetch";

const Jewellery = () => {
  const category = "jewelery";
  return (
    <div className="productPage">
      <ProductDataFetch category={category} />
    </div>
  );
};

export default Jewellery;
