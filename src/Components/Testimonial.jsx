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
          <h3 className="font-kaushan-script text-2xl">Happy Client</h3>
          <h2 className="text-3xl font-bold my-3">WHAT PEOPLE SAY</h2>
          <hr className="bg-yellow-400 h-1 w-16 my-7" />
          <div className="grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 mx-5 sm:mx-auto">
            {testimonials.map((testimonial, idx) => {
              const { name, profession, userImage, comment } = testimonial;
              return (
                <div key={idx} className="card card-side">
                  <figure className="flex items-end min-w-min">
                    <img src={userImage} alt={name} className="w-20 h-20 rounded-full" />
                  </figure>
                  <div className="card-body">
                    <div className="card-title flex flex-col items-start">
                      <h4>{name}</h4>
                      <small className="font-roboto text-gray-400 italic">
                        {profession}
                      </small>
                      <hr className="bg-yellow-400 h-1 w-16 my-3" />
                    </div>
                    <p className="font-roboto text-gray-400 sm:w-8/12 xl:w-11/12">
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
