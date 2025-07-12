import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Blog from "../Components/Blog";
import HeroImage from "../assets/Hero.png";
import { data } from "react-router-dom";
import { useState } from "react";

const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      const res = await fetch("http://localhost:8080/api/posts");
      const data=await res.json();
      console.log(data);
      setBlogs(data);
    }
    getBlogs();

  }, []);


  return (
    <div className="bg-indigo-100 min-h-screen w-full">
      <Navbar />
      <div className="px-4 py-8 md:px-28 md:py-10 mx-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-indigo-900 font-serif">
            Pet Care Blogs
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Expert advice and insights to help you provide the best care for
            your beloved pets
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
            {Blogs.map((post) => (
              <Blog
                key={post.id}
                id={post.id}
                image={HeroImage}
                title={post.title}
                description={post.description}
                category={post.category}
                date={post.postedOn}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
