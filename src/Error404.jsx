
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry! Not Found.</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default Error404;
