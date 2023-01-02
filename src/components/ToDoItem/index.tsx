import React from "react";
import { deleteTodo, getTodos } from "../../api/todo";
import { ToDo } from "../../store/types/interfaces";

type ToDoPros = {
  toDo: ToDo;
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

export default function ToDoItem({ toDo, setToDos }: ToDoPros) {
  async function handleDelete(e: React.SyntheticEvent) {
    e.preventDefault();
    await deleteTodo(toDo.id);
    const data = await getTodos();
    setToDos(data);
  }
  return (
    <li>
      <h2>{toDo.title}</h2>
      <h2>{toDo.createAt}</h2>
      <p>{toDo.content}</p>
      <button>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
