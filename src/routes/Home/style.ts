import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 1rem;
`;

export const LogOut = styled.button`
  margin: 1rem;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const Input = styled.input`
  width: 50%;
  height: 1.5rem;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  width: 50%;
  height: 10rem;
  font-size: 1rem;
  resize: none;
`;

export const Button = styled.button``;

export const Article = styled.article`
  margin-top: 2rem;
`;
