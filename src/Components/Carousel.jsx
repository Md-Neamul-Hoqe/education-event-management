const Carousel = () => {
  return (
    <section>
      <div className="carousel w-full">
        <div className="hero-overlay absolute bg-opacity-30 pointer-events-none"></div>
        <div id="item1" className="carousel-item w-full">
          <img
            src="./src/assets/STEM Education Programs.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="./src/assets/education-banner-2-1.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="./src/assets/training-banner.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="./src/assets/EnSafe-webinar-series-c-scaled.jpg"
            className="w-full"
          />
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
