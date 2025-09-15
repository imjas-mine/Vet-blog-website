import React, { use } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Blog = ({
  id,
  image,
  title,
  description,
  category,
  date,
  isAuthorized,
  onDelete,
}) => {
  const navigate = useNavigate();

  function handleClick(id) {
    console.log("navigating to blog detail page with id:", id);
    navigate(`/BlogDetail/${id}`);
  }
  function handleUpdate(id) {
    console.log("navigating to update blog page with id:", id);
    navigate(`/UpdateBlog/${id}`, {
      state: { id, title, description, category, image, date },
    });
  }
  async function handleDelete(id) {
    console.log("trying to delete blog with id:", id);

    try {
      const res = await fetch(`http://localhost:8080/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) {
        console.log("successfully deleted the blog");
        onDelete(id);
      } else {
        const errMsg = await res.text();
        console.error(errMsg);
      }
    } catch (err) {
      console.log("error deleting the blog");
    }
  }
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-500 text-sm">{date}</span>
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          <span className="text-indigo-600 text-sm font-medium">
            {category}
          </span>
        </div>

        <h2 className="text-2xl font-bold mb-3 font-serif text-gray-800 line-clamp-2 hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h2>

        <p className="text-gray-600 mb-6 line-clamp-3 text-base">
          {description}
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
          <button
            onClick={() => {
              handleClick(id);
            }}
            className="bg-indigo-500 text-white px-6 py-2.5 rounded-lg cursor-pointer hover:bg-indigo-600 transition-colors duration-300 text-sm font-medium w-full md:w-auto"
          >
            Read More
          </button>

          {isAuthorized && (
            <button
              onClick={() => {
                handleUpdate(id);
              }}
              className="bg-indigo-500 text-white px-6 py-2.5 rounded-lg cursor-pointer hover:bg-indigo-600 transition-colors duration-300 text-sm font-medium w-full md:w-auto"
            >
              Update
            </button>
          )}
          {isAuthorized && (
            <button
              onClick={() => {
                handleDelete(id);
              }}
              className="bg-red-700 text-white px-6 py-2.5 rounded-lg cursor-pointer hover:bg-red-400 transition-colors duration-300 text-sm font-medium w-full md:w-auto"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
