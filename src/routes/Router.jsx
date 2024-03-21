import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage.jsx";
import AllProducts from "../pages/categories/AllProducts.jsx";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },

    {
      path: "shop",
      element: <AllProducts />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
