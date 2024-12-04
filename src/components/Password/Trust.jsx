import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordPage = () => {
  // State for user inputs and error handling
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const correctPassword = "rajdey"; // Hardcoded password

  // Handle uppercase conversion for name input
  const handleNameChange = (e) => {
    setName(e.target.value.toUpperCase());
  };

  // Handle password submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate("/Youtube"); // Navigate to the next page if password is correct
    } else {
      setError("Incorrect password, please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-rose-600 p-8 rounded-lg shadow-md "
      >
        <h2 className="text-2xl font-bold mb-12 text-center text-black font-Faculty">
          Access Protected Area
        </h2>

        {/* Name Input Section */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-slate-950 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2 border rounded-md placeholder-blue-300 font-Faculty"
            placeholder="Enter Your Name"
          />
        </div>

        {/* Password Input Section */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-slate-950 font-bold mb-2 font-Faculty"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); // Clear error when user starts typing
            }}
            className="w-full px-3 py-2 border rounded-md placeholder-blue-300 "
            autoComplete="new-password"
            placeholder="Enter password"
            required
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-black text-sm mb-4 text-center">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full font-Faculty bg-blue-500 text-white py-2 rounded-md hover:bg-orange-400 transition duration-300 hover:text-black "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordPage;
