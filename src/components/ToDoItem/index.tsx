import { ToDo } from "../../store/types/interfaces";

type ToDoPros = {
  toDo: ToDo;
};

export default function ToDoItem({ toDo }: ToDoPros) {
  return (
    <li>
      <h2>{toDo.title}</h2>
      <h2>{toDo.createAt}</h2>
      <p>{toDo.content}</p>
      <button>수정</button>
      <button>삭제</button>
    </li>
  );
}
