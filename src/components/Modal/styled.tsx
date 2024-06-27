import styled from "styled-components";

export const Modal = styled.div`
  margin-top: 100px;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #3b1c08;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.button`
  background: none;
  color: #bea322;
  font-weight: bold;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ContainerText = styled.div`
  margin-top: 10px;
  width: 400px;
`;

export const ModalTitle = styled.h2`
  font-family: "MedievalSharp", cursive;
  margin-bottom: 10px;
  color: white;
`;

export const ModalText = styled.p`
  margin-bottom: 20px;
  color: white;
  font-family: ${(props) => props.theme.fonts.subtitle};
`;

export const ContainerLogo = styled.div`
  cursor: pointer;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;

  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;

  &:hover {
    width: 200px;
    height: 200px;
  }
`;
