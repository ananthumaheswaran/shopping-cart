import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import Shop from "../pages/Shop.jsx";
import HomePage from "../pages/HomePage.jsx";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop/:name",
      element: <Shop />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
