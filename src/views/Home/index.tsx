import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Book from "../../assets/images/livro.png";
import { Vocations } from "../../global/const";
import { Modal } from "../../components";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isModalShown = localStorage.getItem("isModalShown");
    if (!isModalShown) {
      setShowModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("isModalShown", "true");
  };

  return (
    <S.Container>
      <Modal
        show={showModal}
        onClose={closeModal}
        title="Tecno Forja RPG: Siga-nos e Viva Aventuras Épicas!"
        text="Apaixonado por RPG? Junte-se à nossa iniciativa da Tecno Forja RPG, uma comunidade vibrante no RJ. Siga nossa página para ficar por dentro de eventos exclusivos, dicas de RPG e muito mais! Envie-nos um direct para saber mais. 🌟"
      />
      <S.ContainerToken>
        <S.Title>Vamos lá, escolha sua ficha ;) </S.Title>
        <S.SubTitle>Vocações</S.SubTitle>
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Vocations &&
            Vocations.map((vocation, index) => (
              <S.ContainerShield key={index}>
                <a href={vocation.link} target="_blank" rel="noreferrer">
                  <S.Shield src={vocation.image} alt={vocation.name} />
                </a>
              </S.ContainerShield>
            ))}
        </div>
      </S.ContainerToken>
      <S.ContainerBook>
        <S.Title>Garanta Já o Seu Livro Básico de Pugmire</S.Title>
        <S.SubTitleBook>
          Explore um Mundo Épico de Aventuras Caninas!
        </S.SubTitleBook>
        <S.Paragraph>
          Em Pugmire, cães heróicos exploram ruínas antigas e enfrentam perigos
          desconhecidos, com um sistema de regras simplificado que promove a
          cooperação.
        </S.Paragraph>
        <S.Paragraph>
          Torne-se um verdadeiro herói canino e honre seu dono nesta emocionante
          aventura!
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
  );
};

export default Home;
