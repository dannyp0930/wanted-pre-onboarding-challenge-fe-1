import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getToDos } from "../../api/todo";
import { ToDo } from "../../store/types/interfaces";

function Home() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  function handleClick() {
    localStorage.removeItem("accessToken");
    navigate("/auth");
  }
  useEffect(() => {
    getToDos();
  }, [])
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
