import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createTodo, getToDos } from "../../api/todo";
import { ToDo } from "../../store/types/interfaces";

function Home() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  function handleClick() {
    localStorage.removeItem("accessToken");
    navigate("/auth");
  }
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    createTodo(title, content);
    setToDos([...toDos])
  }
  useEffect(() => {
    getToDos();
  }, []);
  return (
    <>
      {accessToken ? (
        <div>
          <button onClick={handleClick}>로그아웃</button>
          <h1>To Do</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              title="제목"
              placeholder="제목"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              title="내용"
              placeholder="내용"
              onChange={(e) => setContent(e.target.value)}
            />
            <button>추가</button>
          </form>
        </div>
      ) : (
        <Navigate to="/auth"></Navigate>
      )}
    </>
  );
}

export default Home;
