const Carousel = () => {
  return (
    <section>
      <div className="carousel w-full max-h-[calc(100vh-72px)]">
        <div className="hero-overlay absolute inset-0 bg-opacity-30 pointer-events-none"></div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/tpd93NX/education-banner-2-1.jpg"
            className="w-full"
          />
        </div>
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/VMKRCvY/En-Safe-webinar-series-c-scaled.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://i.ibb.co/Qc7n1jb/STEM-Education-Programs.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://i.ibb.co/nn8b2Nv/training-banner.jpg" className="w-full" />
        </div>
      </div>

      {/* Indicators */}
      {/* <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div> */}
    </section>
  );
};

export default Carousel;
