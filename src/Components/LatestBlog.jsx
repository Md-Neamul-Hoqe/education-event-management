import { useEffect, useState } from "react";

const LatestBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/latestposts.json")
      .then((res) => res.json)
      .then((data) => setPosts(data));
  }, []);

  return (
    <section>
      <div className="container flex flex-col items-center py-28">
        <h3 className="font-kaushan-script lg:text-2xl text-lg">Our Stories</h3>
        <h2 className="text-xl lg:text-3xl font-bold my-3">LATEST BLOG</h2>
        <hr className="bg-[#f38181] h-1 w-16 my-7" />
        <p className="w-10/12 text-center mb-32">
          We post here some new concept of us.
        </p>
        <div className="flex justify-between flex-col xl:flex-row">
          {posts.slice(0, 3).map((post, idx) => {
            const {
              image,
              title,
              description,
              viewCount,
              commentCount,
              postOn,
            } = post;

            return (
              <div key={idx} className="card rounded-none">
                <figure className="rounded-none indicator">
                  <div className="indicator">
                    <div className="w-20 h-24 text-white flex flex-col items-center justify-center bg-[#95E1D3] indicator-item indicator-middle indicator-start ml-10 mt-10">
                      <h3 className="text-5xl font-bold">
                        {postOn.slice(0, 2)}
                      </h3>
                      <h6 className="italic block">
                        {postOn.slice(3)}
                      </h6>
                    </div>
                    {image ? (
                      <img src={image} alt={title} className="w-full px-8" />
                    ) : (
                      <div className="w-full h-60 bg-periwinkle"></div>
                    )}
                  </div>
                </figure>
                <div className="card-body items-start w-full">
                  <h2>{title}</h2>
                  <p className="text-gray-400">{description}</p>
                  <hr className="w-full bg-gray-400 my-5" />
                  <div className="flex gap-3 text-gray-400 items-center">
                    <i className="fa fa-eye text-[#95E1D3]"></i> {viewCount}{" "}
                    <i className="fa fa-comment-dots text-[#95E1D3]"></i>{" "}
                    {commentCount}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
