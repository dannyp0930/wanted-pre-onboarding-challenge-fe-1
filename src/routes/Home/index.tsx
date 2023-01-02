import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createTodo, getTodos } from "../../api/todo";
import ToDoItem from "../../components/ToDoItem";
import { ToDo } from "../../store/types/interfaces";
import { Article, Button, Container, Form, Input, Items, LogOut, Nav, TextArea, Title } from "./style";

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
        <Container>
          <Nav>
            <Title>To Do</Title>
            <LogOut onClick={handleClick}>로그아웃</LogOut>
          </Nav>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              title="제목"
              placeholder="제목"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <TextArea
              title="내용"
              placeholder="내용"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <Button>추가</Button>
          </Form>
          <Article>
            <Items>
              {toDos?.map((toDo: ToDo) => (
                <ToDoItem key={toDo.id} toDo={toDo} setToDos={setToDos} />
              ))}
            </Items>
          </Article>
        </Container>
      ) : (
        <Navigate to="/auth"></Navigate>
      )}
    </>
  );
}

export default Home;
