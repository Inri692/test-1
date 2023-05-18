import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Home from "../pages/Home";

const index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default index;
