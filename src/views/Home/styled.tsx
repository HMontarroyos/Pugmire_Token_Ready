import styled from "styled-components";

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  flex-wrap: wrap;
  padding: 50px;


  @media (max-width: 360px) {
    margin-top: 150px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
  }
`;


export const SubTitle = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  font-size: 28px;
  margin-bottom: 10px;
  font-family: "MedievalSharp", cursive;
  font-weight: 400;
  font-style: normal;

`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.title};

`;

export const SubTitleBook = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.title};

`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts.subtitle};
  text-align: center;
`;

export const ContainerToken = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerShield = styled.div`
  display: flex;
  gap: 20;
`;

export const Shield = styled.img`
  width: 60px;
  height: 80px;
  cursor: pointer;
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;

  &:hover {
    transform: scale(1.1);
    width: 65px;
    height: 85px;
  }
`;

export const ContainerBook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  gap: 20;

    @media (max-width: 900px) {
    margin-top: 50px;
  }
`;

export const Book = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;

  &:hover {
    transform: scale(1.1);
    width: 220px;
    height: 320px;
  }
`;
