import styled from "styled-components";

export const Container = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 30%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  height: 1.5rem;
  background-color: #F8F8F8;
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem;
`;

export const Button = styled.button`
  background-color: #fc76a1;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  color: #f8f8f8;

  a {
    display: block;
    background: none;
    color: #f8f8f8;
    text-decoration: none;
  }
`;
