import React, { use } from "react";
import { Calendar } from "lucide-react";
const Blog = ({
  id,
  title,
  description,
  category,
  date,
  isAuthorized,
  onDelete,
}) => {
  function handleClick(id) {
    console.log("navigating to blog detail page with id:", id);
  }
  function handleUpdate(id) {
    console.log("navigating to update blog page with id:", id);
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
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-200">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 flex-wrap">
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </span>
        <div className="flex gap-0.5 items-center">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="text-gray-600 mt-2">{description}</p>

      <div className="mt-3 flex items-center justify-between">
        <a className="text-blue-600 font-medium text-sm inline-block cursor-pointer hover:text-blue-400">
          Read Full Article →
        </a>

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
  );
};

export default Blog;
