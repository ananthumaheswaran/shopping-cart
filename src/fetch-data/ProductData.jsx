import { useState } from "react";
import { useEffect } from "react";
import ErrorPage from "../pages/ErrorPage";

const ProductData = ({ category, limit }) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let url = "https://fakestoreapi.com/products";

  if (category) url += `/category/${category}`;

  if (limit) url += `?limit=${limit}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (error) return <ErrorPage />;
  if (isLoading)
    return (
      <>
        <div className="loading-screen-icon">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="animate-spin w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg> */}

          {/* ////////////////////////////////////////////////////////////////////////////////// */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="animate-spin w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      </>
    );
  if (!products) return <p>No products found</p>;
  return (
    <>
      <div className="product-card-container">
        {products.map((product) => (
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
        ))}
      </div>
    </>
  );
};

export default ProductData;
