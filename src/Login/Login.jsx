import React, { useEffect, useState } from "react";
import "./Loginstyle.css";
import { useNavigate } from "react-router-dom";
import { getToken, setToken } from "../Utils/Utils";
const url = "https://dummyjson.com/auth/login";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const Authantication = async () => {
      const accessToken = getToken("accessToken");
      const res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`, // Pass JWT via Authorization header
        },
        credentials: "include", // Include cookies (e.g., accessToken) in the request
      });
      if (res.status === 200) {
        console.log("res successfully and navigation / userdetails");
        navigate("/userDetails");
      } else {
        console.log("unauthrised token");
      }
    };
    Authantication();
  }, []);
  const [userName, setUsername] = useState();
  const [userPass, setUserPass] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchData = async () => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName, //'emilys',
        password: userPass, //'emilyspass',
        expiresInMins: 1, // optional, defaults to 60
      }),
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    setToken("accessToken", data.accessToken);
    setToken("refreshToken", data.refreshToken);

    navigate("/userDetails");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Enter the UserName: </span>
          <input
            type="text"
            placeholder="Enter the userName"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <span>Enter the Password: </span>
          <input
            type="password"
            placeholder="Enter the password"
            name="password"
            onChange={(e) => setUserPass(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={fetchData}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
