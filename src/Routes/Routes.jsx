import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import ErrorService from "../Pages/ErrorService";
// import BlogPost from "../Components/BlogPost";
import Register from "../Pages/Register";
import Blog from "../Pages/Blog";
import Conversation from "../Pages/Conversation";

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
        path: "/service/:id", /* private */
        element: <Details />,
        errorElement: <ErrorService />,
      },
      {
        path: "/blog", /* extra private route */
        element: <Blog />,
      },
      {
        path: "/conversation", /* extra private route */
        element: <Conversation />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
