import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductData from "../fetch-data/ProductData";

const Men = () => {
  const category = `men's clothing`;
  return (
    <div className="productPage">
      <ProductData category={category} />
    </div>
  );
};

const Women = () => {
  const category = `women's clothing`;
  return (
    <div className="productPageThreeRow">
      <ProductData category={category} />
    </div>
  );
};

const Jewellery = () => {
  const category = "jewelery";
  return (
    <div className="productPage">
      <ProductData category={category} />
    </div>
  );
};

const Electronics = () => {
  const category = "electronics";
  return (
    <div className="productPageThreeRow">
      <ProductData category={category} />
    </div>
  );
};

const AllProducts = () => {
  return (
    <div className="productPage">
      <ProductData />
    </div>
  );
};

const Shop = () => {
  const { name } = useParams();

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div>
        {name === "men" ? (
          <Men />
        ) : name === "women" ? (
          <Women />
        ) : name === "jewelery" ? (
          <Jewellery />
        ) : name === "electronics" ? (
          <Electronics />
        ) : (
          <AllProducts />
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
