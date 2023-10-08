import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/latestposts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  return (
    <section>
      <Navbar />
      <div className="container flex flex-col items-center py-28 max-w-6xl mx-auto">
        <h3 className="font-kaushan-script text-2xl">Our Stories</h3>
        <h2 className="text-3xl font-bold my-3">LATEST BLOG</h2>
        <hr className="bg-[#f38181] h-1 w-16 my-7" />
        <p className="w-10/12 text-center mb-32">
        Our blog is a treasure trove of mathematical insights, where experts, educators, and enthusiasts come together to share their passion and knowledge. Whether you&apos;re a seasoned mathematician, a curious student, or an educator seeking innovative teaching methods, our blog offers something for everyone.
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
              <div key={idx} className="card rounded-none flex flex-row-reverse my-10">
                <figure className="rounded-none">
                  <div className="indicator">
                    <div className="w-20 h-24 text-white flex flex-col items-center justify-center bg-[#95E1D3] indicator-item indicator-middle indicator-start ml-10 mt-10">
                      <h3 className="text-5xl font-bold">
                        {postOn.slice(0, 2)}
                      </h3>
                      <h6 className="font-roboto italic block">
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
                
                <div className="w-full">
                  <h2 className=" card-title pb-5">{title}</h2>
                  <p className="text-periwinkle">{description}</p>
                  <hr className="w-full bg-periwinkle my-5" />
                  <div className="flex gap-3 text-periwinkle items-center">
                    <AiOutlineEye className="text-green-400"/> {viewCount}{" "}
                    <FaRegCommentDots className="text-green-400"/>{" "}
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
