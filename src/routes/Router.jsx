import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage.jsx";
import Shop from "../pages/Shop.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },

    {
      path: "shop",
      element: <Shop />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
