import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background-color: #21212B;
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
  width: 50%;
  color: #F8F8F8;
  font-size: 1.5rem;
  font-weight: bold;
  height: calc(1.5rem - 1px);
  background: none;
  border: none;
  border-bottom: 1px solid #F8F8F8;
  padding: 0.5rem;
  
  :focus {
    outline: none;
  }
  `;

export const Title = styled.h2`
  height: 1.5rem;
  padding: 0.5rem;
  a {
    text-decoration: none;
    color: #F8F8F8;
  }
  `;

export const Textarea = styled.textarea`
  color: #F8F8F8;
  font-size: 1rem;
  line-height: 125%;
  resize: none;
  background: none;
  border: none;
  border-bottom: 1px solid #F8F8F8;
  padding: 0;
  height: calc(4rem - 1px);

  :focus {
    outline: none;
  }
`;

export const Content = styled.p`
  height: 4rem;
  padding: 0;
  line-height: 125%;
  white-space: pre-line;
  overflow: auto;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;
`;

export const Section = styled.section`
  color: gray;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.8rem;
  }
`;
