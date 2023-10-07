const LatestBlog = () => {
  return (
    <section id="lblog-section">
      <div className="container flex flex-col items-center py-28">
        <h3 className="font-kaushan-script text-2xl">Our Stories</h3>
        <h2 className="text-3xl font-bold my-3">LATEST BLOG</h2>
        <hr className="bg-[#f38181] h-1 w-16 my-7" />
        <p className="w-10/12 text-center mb-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-between flex-col xl:flex-row">
          <div className="card rounded-none">
            <figure className="rounded-none indicator">
              <div className="indicator">
                <div className="w-20 h-24 text-white flex flex-col items-center justify-center bg-[#95E1D3] indicator-item indicator-middle indicator-start ml-10 mt-10">
                  <h3 className="text-5xl font-bold">14</h3>
                  <h6 className="font-roboto italic block">Jan</h6>
                </div>
                <img
                  src="./asset/images/lblog.png"
                  alt="Shoes"
                  className="w-full px-8"
                />
              </div>
            </figure>
            <div className="card-body items-start w-full">
              <h2>incididunt ut labore et dolore</h2>
              <p className="text-gray-400 font-roboto">
                Elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <hr className="w-full bg-gray-400 my-5" />
              <div className="flex gap-3 text-gray-400 items-center">
                <i className="fa fa-eye text-[#95E1D3]"></i> 1560{" "}
                <i className="fa fa-comment-dots text-[#95E1D3]"></i> 98
              </div>
            </div>
          </div>
          <div className="card rounded-none">
            <figure className="rounded-none indicator">
              <div className="indicator">
                <div className="w-20 h-24 text-white flex flex-col items-center justify-center bg-[#95E1D3] indicator-item indicator-middle indicator-start ml-10 mt-10">
                  <h3 className="text-5xl font-bold">14</h3>
                  <h6 className="font-roboto italic block">Jan</h6>
                </div>
                <img
                  src="./asset/images/lblog.png"
                  alt="Shoes"
                  className="w-full px-8"
                />
              </div>
            </figure>
            <div className="card-body items-start w-full">
              <h2>incididunt ut labore et dolore</h2>
              <p className="text-gray-400 font-roboto">
                Elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <hr className="w-full bg-gray-400 my-5" />
              <div className="flex gap-3 text-gray-400 items-center">
                <i className="fa fa-eye text-[#95E1D3]"></i> 1560{" "}
                <i className="fa fa-comment-dots text-[#95E1D3]"></i> 98
              </div>
            </div>
          </div>
          <div className="card rounded-none">
            <figure className="rounded-none indicator">
              <div className="indicator">
                <div className="w-20 h-24 text-white flex flex-col items-center justify-center bg-[#95E1D3] indicator-item indicator-middle indicator-start ml-10 mt-10">
                  <h3 className="text-5xl font-bold">14</h3>
                  <h6 className="font-roboto italic block">Jan</h6>
                </div>
                <img
                  src="./asset/images/lblog.png"
                  alt="Shoes"
                  className="w-full px-8"
                />
              </div>
            </figure>
            <div className="card-body items-start w-full">
              <h2>incididunt ut labore et dolore</h2>
              <p className="text-gray-400 font-roboto">
                Elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <hr className="w-full bg-gray-400 my-5" />
              <div className="flex gap-3 text-gray-400 items-center">
                <i className="fa fa-eye text-[#95E1D3]"></i> 1560{" "}
                <i className="fa fa-comment-dots text-[#95E1D3]"></i> 98
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="map">
        <div className="flex justify-center items-center py-16 bg-gray-300 bg-opacity-90">
          <div className="text-[#f38181] flex flex-col justify-center items-center space-y-5">
            <i className="fa fa-2x fa-location-pin"></i>
            <h4 className="text-2xl font-bold">OPEN MAP</h4>
            <hr className="bg-[#f38181] h-1 w-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
