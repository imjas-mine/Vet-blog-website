import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import HeroImage from '../assets/Hero.png';

const BlogDetail = () => {
  let param=useParams();
  const id=param.id;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBlogById() {
      const res = await fetch(`http://localhost:8080/api/posts/${id}`);
      const data = await res.json();
      setBlog(data);
      setLoading(false);
    }
    getBlogById();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-indigo-100 min-h-screen w-full flex items-center justify-center">
        <span className="text-indigo-700 text-xl font-semibold">Loading...</span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-indigo-100 min-h-screen w-full flex items-center justify-center">
        <span className="text-red-600 text-xl font-semibold">Blog not found.</span>
      </div>
    );
  }

  return (
    <div className="bg-indigo-100 min-h-screen w-full">
      <Navbar />
      <div className="px-4 py-8 md:px-28 md:py-10 mx-10">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={HeroImage}
              alt={blog.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-500 text-sm">{blog.postedOn}</span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              <span className="text-indigo-600 text-sm font-medium">{blog.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-800">
              {blog.title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed font-sans">
              {blog.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
