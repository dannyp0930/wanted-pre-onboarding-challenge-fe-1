import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createTodo, getTodos } from "../../api/todo";
import ToDoItem from "../../components/ToDoItem";
import { ToDo } from "../../store/types/interfaces";

function Home() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  // To Do list 호출
  useEffect(() => {
    getTodos().then((data) => setToDos(data));
  }, []);

  // 로그아웃
  function handleClick() {
    localStorage.removeItem("accessToken");
    navigate("/auth");
  }

  // To Do 생성
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    await createTodo(title, content);
    const data = await getTodos();
    setToDos(data);
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
                <ToDoItem key={toDo.id} toDo={toDo} setToDos={setToDos} />
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
