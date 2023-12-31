import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section id="service-section" className="p-5 md:py-28 max-w-6xl mx-auto">
      <div className="container flex flex-col items-center">
        <h3 className="font-kaushan-script lg:text-2xl text-lg">We work with</h3>
        <h2 className="text-xl lg:text-3xl font-bold my-3">AMAZING SERVICES</h2>

        <hr className="bg-yellow-400 h-1 w-16 my-7" />

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
