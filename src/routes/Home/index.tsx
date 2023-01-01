import React from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const accesstoken = localStorage.getItem("accesstoken");
  return (
    <>{accesstoken ? <div>Home</div> : <Navigate to="/auth"></Navigate>}</>
  );
}

export default Home;
