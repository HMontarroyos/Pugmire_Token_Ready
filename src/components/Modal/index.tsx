import React from "react";
import * as S from "./styled";
import Logo_Mesa_Triforce_RPG from "../../assets/images/logo_mesa_triforce.png";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, text }) => {
  if (!show) {
    return null;
  }

  return (
    <S.Modal>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        <S.ContainerText>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalText>{text}</S.ModalText>
          <S.ContainerLogo>

          <a
            href={"https://www.instagram.com/tecno_forja_rpg/"}
            target="_blank"
            rel="noreferrer"
          >
            <S.Image
              src={Logo_Mesa_Triforce_RPG}
              alt={"Logo_Tecno_Forja_RPG"}
            />
          </a>
            <S.ModalTitle>@TECNO_FORJA_RPG</S.ModalTitle>
          </S.ContainerLogo>
        </S.ContainerText>
      </S.ModalContent>
    </S.Modal>
  );
};

export default Modal;
