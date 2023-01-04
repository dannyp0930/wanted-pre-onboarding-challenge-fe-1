import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { deleteTodo, getTodos } from "../../api/todo";
import { ToDo } from "../../store/types/interfaces";
import { BtnContainer, Content, Header, Item, Title } from "./style";
import ToDoDetail from "../ToDoDetail";

type ToDoPros = {
  toDo: ToDo;
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  lang: string;
};

export default function ToDoItem({ toDo, setToDos, lang }: ToDoPros) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // To Do 삭제
  async function handleDelete(e: React.SyntheticEvent) {
    e.preventDefault();
    await deleteTodo(toDo.id);
    const data = await getTodos();
    setToDos(data);
  }

  return (
    <Item>
      {modalOpen && (
        <ToDoDetail
          id={toDo.id}
          setToDos={setToDos}
          setModalOpen={setModalOpen}
          lang={lang}
        />
      )}
      <Header>
        <Title id={`${toDo.id}`}>
          <a href={`#${toDo.id}`}>{toDo.title}</a>
        </Title>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </Header>
      <Content>{toDo.content}</Content>
      <BtnContainer>
        <button onClick={() => setModalOpen(true)}>더보기</button>
      </BtnContainer>
    </Item>
  );
}
