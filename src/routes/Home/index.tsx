import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  function handleClick() {
    localStorage.removeItem("accessToken");
    navigate('/auth');
  }
  return (
    <>
      {accessToken ? (
        <div>
          <button onClick={handleClick}>로그아웃</button>
          <h1>To Do</h1>
        </div>
      ) : (
        <Navigate to="/auth"></Navigate>
      )}
    </>
  );
}

export default Home;
