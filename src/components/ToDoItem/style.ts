import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background-color: #21212b;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  height: 1.5rem;
  padding: 0.5rem;

  a {
    text-decoration: none;
    color: #f8f8f8;
  }
`;

export const Content = styled.p`
  height: 3.5rem;
  padding: 0;
  line-height: 125%;
  white-space: pre-line;
  overflow: hidden;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  button {
    color: #f8f8f8;
    font-size: 1rem;
  }
`;
