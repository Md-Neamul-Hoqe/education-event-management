import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "../error404";
import Home from "../Home";
import Details from "../Details";
import ErrorService from "../ErrorService";

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
        path: "/service/:id",
        element: <Details />,
        errorElement: <ErrorService />,
      },
    ],
  },
]);

export default router;
