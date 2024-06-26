import React from "react";
import * as S from "./styled";
import { Fade } from "react-reveal";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Fade left>
      <S.Title>{title}</S.Title>
    </Fade>
  );
};

export default Title;
