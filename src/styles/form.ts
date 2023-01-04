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

  @media screen and (max-width: 1023px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 1rem;
  height: 2.5rem;
  background-color: #f8f8f8;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;

  :focus {
    outline: none;
  }

  :invalid {
    border: 1px solid red;
  }
`;

export const Button = styled.button`
  background-color: #fc76a1;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  height: 2.5rem;
  color: #f8f8f8;

  a {
    display: block;
    background: none;
    color: #f8f8f8;
    text-decoration: none;
  }
`;
