import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import ErrorService from "../Pages/ErrorService";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Blog from "../Pages/Blog";
import Conversation from "../Pages/Conversation";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id" /* private */,
        element: (
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        ),
        errorElement: <ErrorService />,
      },
      {
        path: "/blog" /* extra private route */,
        element: (
          <PrivateRoutes>
            <Blog />
          </PrivateRoutes>
        ),
      },
      {
        path: "/conversation" /* extra private route */,
        element: (
          <PrivateRoutes>
            <Conversation />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
