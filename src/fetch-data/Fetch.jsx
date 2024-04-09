import { useState, useEffect } from "react";

const Fetch = ({ category, limit, id }) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let url = "https://fakestoreapi.com/products";

  if (category) url += `/category/${category}`;

  if (limit) url += `?limit=${limit}`;

  if (id) url += `/${id}`;

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

  if (error) return { error: error.message };
  if (isLoading) return { isLoading: true };
  if (!products) return { products: [] };

  return { products };
};

export default Fetch;
