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
  margin-top: 50px;
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
  background-color: #396193;
  border: 2px solid #ccb842;
  display: flex;
  justify-content: center;
  width: 130px;
  padding: 5px;
  text-align: center;

  &:hover {
    border-color:  #5D4724;
  }
`;

export const LinkRedirect = styled(Link)`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  &:hover {
    font-size: 15px;
  }
`;
