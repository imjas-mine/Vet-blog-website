import React, { useState, useEffect } from "react";

const BlogForm = ({ initialValues = {}, onSubmit, submitText }) => {
  const [title, setTitle] = useState(initialValues.title || "");
  const [description, setDescription] = useState(initialValues.description || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(initialValues.title || "");
    setDescription(initialValues.description || "");
    setCategory(initialValues.category || "");
  }, [initialValues]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title || !description || !category) {
      setError("All fields are required");
      return;
    }

    onSubmit({ title, description, category });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter blog title"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter blog description"
          rows={5}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        >
          <option value="" disabled>Select category</option>
          <option value="Pet Health">Pet Health</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Preventative Care">Preventative Care</option>
          <option value="Emergency Care">Emergency Care</option>
          <option value="Dental Care">Dental Care</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
      >
        {submitText}
      </button>

      {error && <div className="text-red-600 text-center">{error}</div>}
    </form>
  );
};

export default BlogForm;