import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Details = () => {
  const { id } = useParams();

  const [theService, setTheService] = useState({});

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const [serviceOfTheId] = data.filter((service) => service.id == id);
        setTheService(serviceOfTheId);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <Helmet>
        <title>{"Education Care | " + theService.title}</title>
      </Helmet>
      <div className="card max-w-6xl mx-auto">
        <h1 className="card-title font-bold mx-auto my-5 text-periwinkle text-6xl">
          {theService?.title}
        </h1>
        <figure>
          <img
            className="mx-auto"
            src={"/src/assets/card/Benefits-of-Yoga.jpg" || theService.image}
            alt={theService.title}
          />
        </figure>
        <div className="card-body">
          <div className="border border-yellow-400 bg-periwinkle/5 text-periwinkle p-4 rounded-box">
            <div className="flex gap-2 items-center text-xl">
              <h2 className="font-bold">Date: </h2>
              <p> {theService.date}</p>
              <h2 className="font-bold">Location: </h2>
              <p> {theService.location}</p>
            </div>
            <div className="flex gap-2 items-center text-xl">
              <h2 className="font-bold">Capacity: </h2>
              <p> {theService.participants}</p>
              <h2 className="font-bold">Type: </h2>
              <p> {theService.category}</p>
            </div>
          </div>
          <p className="text-xl text-periwinkle leading-relaxed first-letter:text-6xl first-letter:text-yellow-400">
            {theService.description}
          </p>

          <div className="card-actions py-5 flex justify-end">
            <Link className="btn text-xl bg-yellow-400 font-bold">
              {theService.budget && "Book Now"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
