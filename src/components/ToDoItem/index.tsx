import React, { useEffect, useState } from "react";
import { format } from 'timeago.js';
import { deleteTodo, getTodos, updateTodo } from "../../api/todo";
import { ToDo } from "../../store/types/interfaces";

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
    <li>
      {modify ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleUpdate}>완료</button>
        </>
      ) : (
        <>
          <h2>{toDo.title}</h2>
          <p>{toDo.content}</p>
          <button onClick={() => setModify(!modify)}>수정</button>
        </>
      )}
      <button onClick={handleDelete}>삭제</button>
      <h3>작성 : {format(toDo.createdAt, "ko")}</h3>
      <h3>수정 : {format(toDo.updatedAt, "ko")}</h3>
    </li>
  );
}
