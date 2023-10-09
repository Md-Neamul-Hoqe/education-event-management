import { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <section>
      <div className="bg-gray-200/75">
        <div className="flex flex-col items-center py-28 max-w-6xl mx-auto">
          <h3 className="font-kaushan-script lg:text-2xl text-lg">Happy Client</h3>
          <h2 className="text-xl lg:text-3xl font-bold my-3">WHAT PEOPLE SAY</h2>
          <hr className="bg-yellow-400 h-1 w-16 my-7" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {testimonials.map((testimonial, idx) => {
              const { name, profession, userImage, comment } = testimonial;
              return (
                <div key={idx} className="card max-lg:card-compact max-lg:my-3 lg:card-side">
                  <figure className="flex items-end min-w-min">
                    <img
                      src={userImage}
                      alt={name}
                      className="w-20 h-20 rounded-full"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title flex flex-col items-start">
                      <h4>{name}</h4>
                      <small className="max-md:text-white text-gray-400 italic">
                        {profession}
                      </small>
                      <hr className="bg-yellow-400 h-1 w-16 my-3 max-sm:mx-auto" />
                    </div>
                    <p className="max-md:text-white text-gray-400 sm:w-8/12 xl:w-11/12">
                      {comment}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
