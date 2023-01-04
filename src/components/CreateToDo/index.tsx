import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { createTodo, getTodos } from "../../api/todo";
import { ToDo } from "../../store/types/interfaces";
import { Buttons, Container, Form, Input, TextArea } from "./style";
import { toast } from "react-toastify";

type CreateToDoProps = {
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateToDo({
  setToDos,
  setModalOpen,
}: CreateToDoProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

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

  // To Do 생성
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (title) {
      await createTodo(title, content);
      const data = await getTodos();
      setToDos(data);
      setTitle("");
      setContent("");
      setModalOpen(false);
    } else {
      toast.error("제목을 입력하세요", {
        theme: "dark"
      })
    }
  }

  // 모달 창 닫기
  function handleClose(e: React.SyntheticEvent) {
    e.preventDefault();
    setModalOpen(false);
  }

  return (
    <Container onClick={handleClose}>
      <Form
        onSubmit={handleSubmit}
        onReset={handleClose}
        onClick={(e) => e.stopPropagation()}
      >
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
        <Buttons>
          <button type="reset"><FontAwesomeIcon icon={faXmark} /></button>
          <button type="submit"><FontAwesomeIcon icon={faPlusSquare} /></button>
        </Buttons>
      </Form>
    </Container>
  );
}
