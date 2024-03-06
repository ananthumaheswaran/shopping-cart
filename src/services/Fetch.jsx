import { useState } from "react";
import { useEffect } from "react";

const Fetch = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((response) => {
  //         if (response.status >= 400) {
  //           throw new Error("server error");
  //         }
  //         return response.json();
  //       })
  //       .then((response) => setProducts(response))
  //       .catch((error) => setError(error))
  //       .finally(() => setLoading(false));
  //   }, []);

  //   if (error) return <p>A network error was encountered</p>;
  //   if (loading) return <p>Loading...</p>;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;
  if (!products) return <p>No products found</p>;
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default Fetch;
