import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  z-index: 9999;
  position: fixed;
  width: 100%;
  top: 0;
`;

export const Header = styled.header`
  background-color: #396193;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  height: 120px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Logo = styled.img`

width: 600px;
height: 120px;

`;

export const LinkRedirect = styled(Link)`
  text-decoration: none;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.title};
`;
