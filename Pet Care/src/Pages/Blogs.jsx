import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Blog from "../Components/Blog";
import HeroImage from "../assets/Hero.png";
import { data } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  const token= localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("http://localhost:8080/api/posts");
        const data = await res.json();
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
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
          <button onClick={()=>navigate("/add-blog")} className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 mx-auto">Add Blogs</button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
            {Blogs.length>0 ? (
              Blogs.map((post) => (
                <Blog
                  key={post.id}
                  id={post.id}
                  image={HeroImage}
                  title={post.title}
                  description={post.description}
                  category={post.category}
                  date={post.postedOn}
                  onDelete={(id) => setBlogs((prev) => prev.filter((b) => b.id !== id))}
                />
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 text-center text-gray-500">
                <p>No blogs available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
