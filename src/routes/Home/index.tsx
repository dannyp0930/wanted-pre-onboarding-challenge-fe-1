import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createTodo, getToDos } from "../../api/todo";
import ToDoItem from "../../components/ToDoItem";
import { ToDo } from "../../store/types/interfaces";

function Home() {
  const [toDos, setToDos] = useState<[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  // To Do list 호출
  useEffect(() => {
    getToDos().then((data) => setToDos(data));
  }, []);

  // 로그아웃
  function handleClick() {
    localStorage.removeItem("accessToken");
    navigate("/auth");
  }

  // To Do 생성
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    createTodo(title, content);
    getToDos().then(data => setToDos(data));
    setTitle("");
    setContent("");
  }

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
              value={title}
            />
            <input
              type="text"
              title="내용"
              placeholder="내용"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <button>추가</button>
          </form>
          <div>
            <ul>
              {toDos?.map((toDo: ToDo) => (
                <ToDoItem key={toDo.id} toDo={toDo} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Navigate to="/auth"></Navigate>
      )}
    </>
  );
}

export default Home;
