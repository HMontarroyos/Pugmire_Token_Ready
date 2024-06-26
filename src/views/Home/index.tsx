import React from "react";
import { Header, Footer } from "../../components";
import * as S from "./styled";
import Book from "../../assets/images/livro.png";
import { Artesão } from "../../assets/images/Brasão";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.ContainerToken>
          <S.Title>Vamos lá, escolha sua ficha ;) </S.Title>
          <S.ContainerShield>
            <a
              href="https://drive.google.com/file/d/14smcgjdm6LJpwK-c2_yTesh8epkv4HIa/view?usp=drive_link"
              target="_blank"
            >
              <S.Shield src={Artesão} alt={"Artesão"} />
            </a>
          </S.ContainerShield>
        </S.ContainerToken>
        <S.ContainerBook>
          <S.TitleBook>Garanta Já o Seu Livro Básico de Pugmire</S.TitleBook>
          <S.SubTitle>
            {" "}
            Explore um Mundo Épico de Aventuras Caninas!{" "}
          </S.SubTitle>
          <S.Paragraph>
            Em Pugmire, cães heróicos exploram ruínas antigas e enfrentam
            perigos desconhecidos, com um sistema de regras simplificado que
            promove a cooperação.
          </S.Paragraph>
          <S.Paragraph>
            Torne-se um verdadeiro herói canino e honre seu dono nesta
            emocionante aventura!
          </S.Paragraph>
          <a
            href="https://newordereditora.com/loja/rpg/pugmire/livro-basico-pugmire/"
            target="_blank"
            rel="noreferrer"
          >
            <S.Book src={Book} alt={"Livro Básico Pugmire"} />
          </a>
        </S.ContainerBook>
      </S.Container>
      <Footer />
    </>
  );
};

export default Home;
