import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const token=localStorage.getItem("token");
    console.log("the auth token is:"+token);
    try{
        const res=await fetch ("http://localhost:8080/api/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'Authorization': `Bearer ${token}`,
            },
            body:JSON.stringify({title,description,category})
        });
        if(res.ok){

          console.log("successfully posted the blog");
          navigate("/blogs");
        }
        else{
          const errMsg=await res.text();
          console.error(errMsg);
          setError(errMsg);
        }
    }
    catch(err){
        console.log("error posting the blog");
    }
  };

  return (
    <div className="bg-indigo-100 min-h-screen w-full">
      <Navbar />
      <div className="px-4 py-8 md:px-28 md:py-10 mx-10">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900 font-serif text-center">Add a New Blog</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter blog title"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Description</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
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
                onChange={e => setCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              >
                <option value="" disabled>Select category</option>
                <option value="Health">Health</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Training">Training</option>
                <option value="Behavior">Behavior</option>
                <option value="General">General</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Submit
            </button>
            {error && <div className="text-red-600 text-center">{error}</div>}
            {success && <div className="text-green-600 text-center">{success}</div>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBlog
