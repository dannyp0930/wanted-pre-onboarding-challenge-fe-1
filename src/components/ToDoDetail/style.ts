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

export const Form = styled.div`
  box-sizing: border-box;
  position: fixed;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  padding: 2rem;
  background-color: #21212b;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  height: 2.5rem;
  padding: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: calc(2.5rem - 1px);
  padding: 0.5rem;
  font-size: 2rem;
  color: #f8f8f8;
  background: none;
  border: none;
  border-bottom: 1px solid #f8f8f8;

  :focus {
    outline: none;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    color: gray;
    font-size: 0.8rem;
  }
`;

export const Content = styled.p`
  width: 100%;
  height: 10rem;
  padding: 0;
  line-height: 125%;
  height: 10rem;
  white-space: pre-line;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: calc(10rem - 1px);
  padding: 0;
  font-size: 1rem;
  color: #f8f8f8;
  resize: none;
  background: none;
  border: none;
  border-bottom: 1px solid #f8f8f8;

  :focus {
    outline: none;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
