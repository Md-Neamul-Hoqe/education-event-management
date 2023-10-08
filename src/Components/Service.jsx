import PropTypes from "prop-types";
import { FcRight } from "react-icons/fc";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const {title, budget, description, id, image} = service;
  
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="card card-bordered max-lg:card-compact">
      <figure>
        <img
          className="max-w-xs"
          src={image}
          alt={title}
        />
      </figure>

      <div className="card-body">
        <div className="font-bold text-sm mb-5 flex justify-between items-center">
          <span>{title}</span> <span>{budget}$</span>
        </div>
        <p className="text-[15px] text-base-400">
          {description?.length > 100 ? (
            <>{description.split(".")[0]}</>
          ) : (
            description
          )}
        </p>
        <div className="card-action mt-5">
          <Link to={`/service/${id}`} className="btn bg-yellow-400">
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
