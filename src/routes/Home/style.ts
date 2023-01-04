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

export const Article = styled.article`
  margin-top: 2rem;
  width: 50%;
  display: flex;
  
  @media screen and (max-width: 1023px){
    width: 65%;
  }

  @media screen and (max-width: 767px){
    width: 80%;
  }
`;

export const Items = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
`;
