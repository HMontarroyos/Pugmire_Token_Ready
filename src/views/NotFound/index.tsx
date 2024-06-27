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
        Oops! Você se aventurou nas terras misteriosas de Pugmire!
      </S.Description>
      <S.Description>
        Parece que você tropeçou em um canto perdido do reino dos cães, muito
        tempo após o fim da Era dos Humanos.<br/> Mas não se preocupe, esta é apenas
        uma pausa dramática na sua jornada. <br/>Volte ao caminho principal clicando
        no botão abaixo e explore um universo cheio de maravilhas em meu
        portfólio.<br/> A aventura está apenas começando!
      </S.Description>
      <S.ContainerLink>
        <S.LinkRedirect to={"/"}>
          Voltar ao Início
          <FontAwesomeIcon
            style={{ marginLeft: "8px" }}
            icon={faArrowRotateLeft}
          />
        </S.LinkRedirect>
      </S.ContainerLink>
    </S.Container>
  );
};

export default NotFound;
