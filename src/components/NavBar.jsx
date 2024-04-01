import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <header className="title-block">
          <Link to="/">
            <h1>URBAN STORE</h1>
          </Link>
        </header>
        <nav className="nav-block">
          <ul className="nav-list">
            <Link to="/shop/men">
              <li className="nav-list-item">Men</li>
            </Link>

            <Link to="/shop/women">
              <li className="nav-list-item">Women</li>
            </Link>

            <Link to="/shop/jewelery">
              <li className="nav-list-item">Jewellery</li>
            </Link>

            <Link to="/shop/electronics">
              <li className="nav-list-item">Electronics</li>
            </Link>

            <Link to="/shop/allproducts">
              <li className="nav-list-item">Shop</li>
            </Link>

            {/* <Link>
              <li className="nav-list-item">About Us</li>
            </Link> */}
          </ul>
        </nav>
        <div className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default NavBar;
