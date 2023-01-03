import styled from "styled-components";

export const Container = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 40%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Input = styled.input`
  font-size: 1rem;
  height: 1.5rem;
`;

export const Button = styled.button`
  background-color: pink;
  border-radius: 0.5rem;
  font-size: 1.5rem;

  a {
    display: block;
    background: none;
    text-decoration: none;
  }
`;
