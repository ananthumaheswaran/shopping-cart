import ProductDataFetch from "../../services/ProductDataFetch";

const Women = () => {
  const category = `women's clothing`;
  return (
    <div className="productPageOne">
      <ProductDataFetch category={category} />
    </div>
  );
};

export default Women;
