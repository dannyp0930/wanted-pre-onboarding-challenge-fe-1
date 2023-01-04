import {
  faCircleCheck,
  faPenToSquare,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getTodoById, getTodos, updateTodo } from "../../api/todo";
import { ToDo } from "../../store/types/interfaces";
import timeLocale from "../../utils/timeLcale";
import {
  BtnContainer,
  Container,
  Content,
  Form,
  Header,
  Input,
  Section,
  TextArea,
  Title,
} from "./style";

type ToDoDetailProps = {
  id: string;
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  lang: string;
};

export default function ToDoDetail({
  id,
  setToDos,
  setModalOpen,
  lang,
}: ToDoDetailProps) {
  const [toDo, setTodo] = useState<ToDo>({
    title: "",
    content: "",
    id: "",
    createdAt: "",
    updatedAt: "",
  });
  const [modify, setModify] = useState(false);

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  useEffect(() => {
    getTodoById(id).then((res) => {
      setTodo(res);
    });
  }, [id, modify]);

  // To Do 수정
  async function handleUpdate(e: React.SyntheticEvent) {
    e.preventDefault();
    await updateTodo(id, toDo.title, toDo?.content);
    const data = await getTodos();
    setToDos(data);
    setModify(!modify);
  }

  // 모달 창 닫기
  function handleClose(e: React.SyntheticEvent) {
    e.preventDefault();
    setModalOpen(false);
  }

  function changeToDo(key: keyof ToDo, value: string) {
    setTodo((current: ToDo) => {
      let newToDo = { ...current };
      newToDo[key] = value;
      return newToDo;
    });
  }

  return (
    <Container onClick={handleClose}>
      <Form onClick={(e) => e.stopPropagation()}>
        <Header>
          {modify ? (
            <>
              <Input
                value={toDo.title}
                onChange={(e) => changeToDo("title", e.target.value)}
              />
              <button onClick={handleUpdate}>
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
            </>
          ) : (
            <>
              <Title>{toDo.title}</Title>
              <button onClick={() => setModify(!modify)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </>
          )}
        </Header>
        <Section>
          <p>{timeLocale(toDo.createdAt, lang)}</p>
          <p>{timeLocale(toDo.updatedAt, lang)}</p>
        </Section>
        {modify ? (
          <TextArea
            value={toDo.content}
            onChange={(e) => changeToDo("content", e.target.value)}
          />
        ) : (
          <Content>{toDo.content}</Content>
        )}
        <BtnContainer>
          <button>
            <FontAwesomeIcon icon={faXmarkCircle} onClick={handleClose}/>
          </button>
        </BtnContainer>
      </Form>
    </Container>
  );
}
