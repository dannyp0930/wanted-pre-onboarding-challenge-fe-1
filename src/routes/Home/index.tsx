import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getTodos } from "../../api/todo";
import CreateToDo from "../../components/CreateToDo";
import ToDoItem from "../../components/ToDoItem";
import { ToDo } from "../../store/types/interfaces";
import { Article, Container, Items, LogOut, Nav, Title } from "./style";

function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const lang = navigator.language;

  // To Do list 호출
  useEffect(() => {
    getTodos().then((data) => setToDos(data));
  }, []);

  // 로그아웃
  function handleClick() {
    localStorage.removeItem("accessToken");
    navigate("/auth");
  }

  return (
    <>
      {accessToken ? (
        <Container>
          {modalOpen &&
            <CreateToDo setToDos={setToDos} setModalOpen={setModalOpen} />}
          <Nav>
            <Title>To Do</Title>
            <button onClick={() => setModalOpen(true)}>할일 추가</button>
            <LogOut onClick={handleClick}>로그아웃</LogOut>
          </Nav>
          <Article>
            <Items>
              {toDos?.map((toDo: ToDo) => (
                <ToDoItem
                  key={toDo.id}
                  toDo={toDo}
                  setToDos={setToDos}
                  lang={lang}
                />
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
