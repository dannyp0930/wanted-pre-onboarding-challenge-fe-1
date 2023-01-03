import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const Form = styled.form`
  box-sizing: border-box;
  position: fixed;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 1.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid black;

  :focus {
    outline: none;
  }
  `;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  font-size: 1rem;
  resize: none;
  border: none;
  border-bottom: 1px solid black;
  
  :focus {
    outline: none;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;