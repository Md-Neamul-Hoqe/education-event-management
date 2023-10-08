const Carousel = () => {
  return (
    <section>
      <div className="hero lg:min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content p-0 gap-0 max-w-max">
          <div className="carousel">
            <div id="item1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/tpd93NX/education-banner-2-1.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-20 lg:right-20 left-5 right-5 top-1/2">
                <a
                  href="#item4"
                  className="btn max-lg:btn-xs max-lg:text-[8px] btn-circle bg-yellow-400">
                  ❮
                </a>
                <a
                  href="#item2"
                  className="btn max-lg:btn-xs max-lg:text-[8px] btn-circle bg-yellow-400">
                  ❯
                </a>
              </div>
            </div>
            <div id="item2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/VMKRCvY/En-Safe-webinar-series-c-scaled.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-20 lg:right-20 left-5 right-5 top-1/2">
                <a
                  href="#item1"
                  className="btn max-lg:btn-xs max-lg:text-[8px] btn-circle bg-yellow-400">
                  ❮
                </a>
                <a
                  href="#item3"
                  className="btn max-lg:btn-xs max-lg:text-[8px] btn-circle bg-yellow-400">
                  ❯
                </a>
              </div>
            </div>
            <div id="item3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/Qc7n1jb/STEM-Education-Programs.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-20 lg:right-20 left-5 right-5 top-1/2">
                <a
                  href="#item2"
                  className="btn max-lg:btn-xs max-lg:text-[8px] btn-circle bg-yellow-400">
                  ❮
                </a>
                <a
                  href="#item4"
                  className="btn max-lg:btn-xs max-lg:text-[8px] btn-circle bg-yellow-400">
                  ❯
                </a>
              </div>
            </div>
            <div id="item4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/nn8b2Nv/training-banner.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-20 lg:right-20 left-5 right-5 top-1/2">
                <a
                  href="#item3"
                  className="btn max-lg:btn-xs max-lg:text-[8px] btn-circle bg-yellow-400">
                  ❮
                </a>
                <a
                  href="#item1"
                  className="btn max-lg:btn-xs max-lg:text-[8px] btn-circle bg-yellow-400">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
