import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { deleteTodo, getTodos, updateTodo } from "../../api/todo";
import { ToDo } from "../../store/types/interfaces";
import timeLocale from "../../utils/timeLcale";
import {
  Buttons,
  Content,
  Header,
  Input,
  Item,
  Section,
  Textarea,
  Title,
} from "./style";

type ToDoPros = {
  toDo: ToDo;
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  lang: string;
};

export default function ToDoItem({ toDo, setToDos, lang }: ToDoPros) {
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
              <button onClick={handleUpdate}>
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
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
              <button onClick={() => setModify(!modify)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </Buttons>
          </Header>
          <Content>{toDo.content}</Content>
        </>
      )}
      <Section>
        <p>{timeLocale(toDo.createdAt, lang)}</p>
        <p>{timeLocale(toDo.updatedAt, lang)}</p>
      </Section>
    </Item>
  );
}
