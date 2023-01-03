import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getTodos } from "../../api/todo";
import CreateToDo from "../../components/CreateToDo";
import ToDoItem from "../../components/ToDoItem";
import { ToDo } from "../../store/types/interfaces";
import { Article, Container, Items, Nav, Title } from "./style";

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
          {modalOpen && (
            <CreateToDo setToDos={setToDos} setModalOpen={setModalOpen} />
          )}
          <Nav>
            <Title>
              To Do
              <button onClick={() => setModalOpen(true)}>
                <FontAwesomeIcon icon={faPlusSquare} />
              </button>
            </Title>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
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
