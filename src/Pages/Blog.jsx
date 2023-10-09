import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/latestposts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section>
      <div className="container flex flex-col items-center py-28 max-w-6xl mx-auto">
        <h3 className="font-kaushan-script lg:text-2xl text-lg">Our Stories</h3>
        <h2 className="text-xl lg:text-3xl font-bold my-3">LATEST BLOG</h2>
        <hr className="bg-[#f38181] h-1 w-16 my-7" />
        <p className="lg:w-10/12 text-justify max-lg:px-5 lg:text-center mb-32">
          Our blog is a treasure trove of mathematical insights, where experts,
          educators, and enthusiasts come together to share their passion and
          knowledge. Whether you&apos;re a seasoned mathematician, a curious
          student, or an educator seeking innovative teaching methods, our blog
          offers something for everyone.
        </p>
        <div className="grid grid-cols-1">
          {posts?.map((post, idx) => {
            const {
              image,
              title,
              description,
              viewCount,
              commentCount,
              postOn,
            } = post;

            return (
              <div
                key={idx}
                className="card rounded-none flex items-center lg:flex-row-reverse my-3 lg:my-10 lg:px-5">
                <figure className="rounded-none ms-10">
                  <div className="indicator">
                    <div className="max-md:w-10 max-md:h-10 w-20 h-24 text-white flex flex-col items-center justify-center bg-green-400/70 indicator-item indicator-middle indicator-start ml-10">
                      <h3 className="max-md:text-lg text-4xl font-bold">
                        {postOn.slice(0, 2)}
                      </h3>
                      <h6 className="italic block max-md:text-xs">{postOn.slice(3)}</h6>
                    </div>
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        className="w-[calc(100vw-64px)] px-8 max-h-80"
                      />
                    ) : (
                      <div className="w-full h-60 bg-periwinkle"></div>
                    )}
                  </div>
                </figure>

                <div className="max-lg:px-5">
                  <h2 className=" card-title pb-5">{title}</h2>
                  <p className="text-periwinkle max-md:text-white">{description}</p>
                  <hr className="w-full bg-periwinkle my-5" />
                  <div className="flex gap-3 text-periwinkle max-md:text-white items-center">
                    <AiOutlineEye className="text-green-400" /> {viewCount}{" "}
                    <FaRegCommentDots className="text-green-400" />{" "}
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

export default Blog;
