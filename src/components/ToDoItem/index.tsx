import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import { deleteTodo, getTodos, updateTodo } from "../../api/todo";
import { ToDo } from "../../store/types/interfaces";
import {
  Button,
  Buttons,
  Content,
  Header,
  Input,
  Item,
  Textarea,
  Title,
} from "./style";

type ToDoPros = {
  toDo: ToDo;
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

export default function ToDoItem({ toDo, setToDos }: ToDoPros) {
  const [modify, setModify] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setTitle(toDo.title);
    setContent(toDo.content);
  }, [toDo]);

  // To Do 수정
  async function handleUpdate(e: React.SyntheticEvent) {
    e.preventDefault();
    await updateTodo(toDo.id, title, content);
    setModify(!modify);
    const data = await getTodos();
    setToDos(data);
  }

  // To Do 삭제
  async function handleDelete(e: React.SyntheticEvent) {
    e.preventDefault();
    await deleteTodo(toDo.id);
    const data = await getTodos();
    setToDos(data);
  }

  return (
    <Item>
      {modify ? (
        <>
          <Header>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Buttons>
              <Button onClick={handleUpdate}>완료</Button>
              <Button onClick={handleDelete}>삭제</Button>
            </Buttons>
          </Header>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </>
      ) : (
        <>
          <Header>
            <Title id={`${toDo.id}`}>
              <a href={`#${toDo.id}`}>{toDo.title}</a>
            </Title>
            <Buttons>
              <Button onClick={() => setModify(!modify)}>수정</Button>
              <Button onClick={handleDelete}>삭제</Button>
            </Buttons>
          </Header>
          <Content>{toDo.content}</Content>
        </>
      )}
      <section>
        <p>작성 : {format(toDo.createdAt, "ko")}</p>
        <p>수정 : {format(toDo.updatedAt, "ko")}</p>
      </section>
    </Item>
  );
}
