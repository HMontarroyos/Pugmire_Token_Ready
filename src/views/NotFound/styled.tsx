import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.div`
  z-index: 9999;
  position: fixed;
  width: 100%;
  top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContainerLink = styled.div`
  margin-top: 30px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.quartenary};
  border: 1px solid ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  width: 130px;
  padding: 5px;
  text-align: center;

  &:hover {
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const LinkRedirect = styled(Link)`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 15px;
  }
`;
