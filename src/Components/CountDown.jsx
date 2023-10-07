const CountDown = () => {
  const counter = [
    {
      title: "Webinar PROJECTS",
      count: 42,
    },
    {
      title: "HAPPY CLIENT",
      count: 30,
    },
    {
      title: "AWARD WINNER",
      count: 15,
    },
    {
      title: "CUP OF COFFEE",
      count: 192,
    },
    {
      title: "MEMBERS",
      count: 24,
    },
  ];

  return (
    <div className="min-w-full bg-[#95e1d3] mt-10 lg:mt-32">
      <div className="container">
        <div className="stats shadow rounded-none bg-transparent text-white grid-cols-5 min-w-full">
          {counter.map((count, idx) => (
            <div
              key={idx}
              className="stat place-items-center md:py-10 p-[1rem]">
              <div className="stat-value text-5xl md:text-6xl lg:text-7xl">
                {count.count}
              </div>
              <div className=" text-[8px] md:text-[10px] lg:text-sm stat-title text-white">
                {count.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountDown;
