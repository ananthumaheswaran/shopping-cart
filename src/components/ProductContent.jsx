import Fetch from "../fetch-data/Fetch";
import ErrorPage from "../pages/ErrorPage";
import LoadingPage from "../pages/LoadingPage";
import { Link } from "react-router-dom";

const ProductContent = ({ category, limit }) => {
  const { products, isLoading, error } = Fetch({ category, limit });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      <div className="product-card-container">
        {products.map((product) => (
          <div className="product-card-spacing">
            <Link to="/shop/product">
              <div className="product-card" key={product.id}>
                <div className="product-images-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-images"
                  />
                </div>
                <div className="product-details-container">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">${product.price}</p>
                  <p className="text-xs">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductContent;
