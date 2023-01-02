import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 1.5rem;
  font-weight: bold;
  height: calc(1.5rem - 1px);
  border: none;
  border-bottom: 1px solid black;
  padding: 0.5rem;

  :focus {
    outline: none;
  }
`;

export const Title = styled.h2`
  height: 1.5rem;
  padding: 0.5rem;
  a {
    color: black;
    text-decoration: none;
  }
`;

export const Textarea = styled.textarea`
  font-size: 1rem;
  line-height: 125%;
  resize: none;
  border: none;
  border-bottom: 1px solid black;
  padding: 0;
  height: calc(5rem - 1px);

  :focus {
    outline: none;
  }
`;

export const Content = styled.p`
  height: 5rem;
  padding: 0;
  line-height: 125%;
  white-space: pre-line;
  overflow: auto;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6rem;
`;

export const Button = styled.button``;
