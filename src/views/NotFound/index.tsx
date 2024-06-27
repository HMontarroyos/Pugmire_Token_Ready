import React from "react";
import * as S from "./styled";
import Lottie from "react-lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { NotFoundAnimation } from "../../assets/lotties";

const NotFound: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <S.Container>
        <Lottie options={defaultOptions} height={100} width={200} />
        <S.Description>
          Oops! Parece que você se aventurou em terras desconhecidas, mas não se
          preocupe, estamos só dando uma pausa dramática.
        </S.Description>
        <S.Description>
          Volte logo ao mundo real clicando no botão abaixo e descubra um
          universo de coisas incríveis no meu portfolio. A diversão está apenas
          começando!
        </S.Description>
        <S.ContainerLink>
          <S.LinkRedirect to={'/'}>
            Voltar ao Início
            <FontAwesomeIcon style={{ marginLeft: "8px" }} icon={faArrowRotateLeft} />
          </S.LinkRedirect>
        </S.ContainerLink>
      </S.Container>
  );
};

export default NotFound;
