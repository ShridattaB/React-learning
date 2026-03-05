import React, { useEffect, useState } from "react";
import { getToken, setToken } from "../Utils/Utils";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const [userDetails, setUserDetails] = useState({});
  const accessToken = getToken("accessToken");
  const refreshToken = getToken("refreshToken");
  const navigate = useNavigate();
  const url = "https://dummyjson.com/auth/me";
  
  useEffect(() => {
    const CreateAccesstoken = async () => {
      const res = await fetch("https://dummyjson.com/auth/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          refreshToken: refreshToken, // Optional, if not provided, the server will use the cookie
          expiresInMins: 1,
        }),
        credentials: "include", // Include cookies (e.g., accessToken) in the request
      });
      if (!res.status == 200) {
        navigate(-1);
      } else {
        console.log("new access token created");
      }
      const data = await res.json();
      console.log(data);
      setToken("accessToken", data.accessToken);
    };

    const fetchUserDetails = async () => {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });
      if (res.status === 401) {
        CreateAccesstoken();
      } else {
        console.log("f");
      }
      console.log(res);

      const data = await res.json();
      console.log(data);
      setUserDetails(data);
    };
    fetchUserDetails();
  }, []);

  return (
    <>
      <div>UserDetails</div>
      <h2>ID:- {userDetails.id}</h2>
      <h2>FirstName:- {userDetails.firstName}</h2>
      {/* <h1>{userDetails.id}</h1> */}
    </>
  );
}

export default UserDetails;
