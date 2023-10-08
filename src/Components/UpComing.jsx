import { useEffect, useState } from "react";

const UpComing = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/upcomingevents.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <div className="container flex flex-col items-center my-10">
        <h3 className="font-kaushan-script text-2xl">Up Coming Events</h3>
        <h2 className="text-3xl font-bold my-3">With More Amazing Services</h2>

        <hr className="bg-yellow-400 h-1 w-16 my-7" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border border-yellow-400 rounded-box max-w-6xl mx-auto p-5 mt-5">
        {events?.slice(0, 3).map((event, idx) => {
          return (
            <div key={idx} className="card card-bordered">
              <figure>
                <img src={event?.image} alt={event.title} />
              </figure>
              <div className="card-body">
                <div className="card-title">{event.title}</div>
                <p className="text-periwinkle">{event.description}</p>
                <strong className="text-periwinkle">On: {event.date}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpComing;
