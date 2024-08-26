import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/users/profile/`, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLogout = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/api/users/logout/`,
        {},
        {
          headers: { Authorization: `Token ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome Home, {username}
      </h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
