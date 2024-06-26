import styled from "styled-components";

export const Container = styled.div`
  bottom: 0; /* Fica sempre na parte inferior */
  width: 100%; /* Ocupa toda a largura */
  background-color: #396193;
  border-top: 5px solid #ccb842;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: calc(100% - 100px);
`;

export const ContainerPublishingCompany = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  width: calc(100% - 100px);
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  font-size: 13px;
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 300;
  transition: color 0.3s, font-size 0.3s, font-weight 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.body};
  line-height: 1.5;
  margin: 10px 0;
`;

export const Image = styled.img`
  width: 320px;
  height: 110px;
`;
