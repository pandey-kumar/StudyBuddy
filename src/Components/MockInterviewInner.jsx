import React, { useState } from "react";
import axios from "axios";

const MockInterview = () => {

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    category: "Technical",
  });

  
  const [questions, setQuestions] = useState([]);


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/interview", formData);
      setQuestions(response.data.questions); // Assuming the API returns questions array
      setLoading(false);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mock Interview</h1>

     
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-6 mb-6"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter the job role"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Question Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="Technical">Technical</option>
            <option value="Behavioral">Behavioral</option>
            <option value="General">General</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          disabled={loading}
        >
          {loading ? "Generating..." : "Start Interview"}
        </button>
      </form>

 
      {error && <p className="text-red-500">{error}</p>}

    
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Interview Questions</h2>
        {loading && <p>Loading questions...</p>}
        {questions.length > 0 ? (
          <ul className="list-disc pl-5">
            {questions.map((question, index) => (
              <li key={index} className="mb-2">
                {question}
              </li>
            ))}
          </ul>
        ) : (
          <p>No questions generated yet.</p>
        )}
      </div>
    </div>
  );
};

export default MockInterview;
