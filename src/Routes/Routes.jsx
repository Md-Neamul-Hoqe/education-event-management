import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "../error404";
import Home from "../Home";

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
    ],
  },
]);

export default router;
