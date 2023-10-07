import PropTypes from "prop-types";
import { FcRight } from "react-icons/fc";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className="card card-bordered">
      <figure>
        <img
          className="max-w-xs"
          src="/src/assets/card/Benefits-of-Yoga.jpg"
          alt={service.title}
        />
      </figure>

      <div className="card-body">
        <div className="font-bold text-sm mb-5 flex justify-between items-center">
          <span>{service.title}</span> <span>{service.price}$</span>
        </div>
        <p className="font-roboto text-[15px] text-base-400">
          {service.description?.length > 100 ? (
            <>{service.description.split(".")[0]}</>
          ) : (
            service.description
          )}
        </p>
        <div className="card-action mt-5">
          <Link to={`/service/${service.id}`} className="btn bg-yellow-400">
            Details <FcRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
