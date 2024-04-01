import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import AllProducts from "./categories/AllProducts";
import Men from "./categories/Men";
import Jewellery from "./categories/Jewellery";
import Electronics from "./categories/Electronics";
import Women from "./categories/Women";
import Footer from "../components/Footer";

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
