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

export const Article = styled.article`
  margin-top: 2rem;
  width: 80%;
  display: flex;
`;

export const Items = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
`;
