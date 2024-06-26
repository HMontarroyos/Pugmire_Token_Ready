import styled from "styled-components";

export const Title = styled.h1`
  margin-left: 20px;
  color: ${(props) => props.theme.colors.text};
  font-size: 65px;
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.fonts.title};

  @media (max-width: 500px) {
    font-size: 45px;
  }
`;
