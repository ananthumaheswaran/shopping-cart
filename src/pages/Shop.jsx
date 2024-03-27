import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import AllProducts from "./categories/AllProducts";
import Men from "./categories/Men";
import Jewellery from "./categories/Jewellery";
import Electronics from "./categories/Electronics";

const Shop = () => {
  const { name } = useParams();

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div>{name === "men" ? <Men /> : <AllProducts />}</div>
    </>
  );
};

export default Shop;
