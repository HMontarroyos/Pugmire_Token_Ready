import * as S from "./styled";
import NewOrder from "../../assets/images/LOGO-__-New-Order.png";
import PugSteady from "../../assets/images/PugSteady.png";
import Onyx from "../../assets/images/Onyx.png";

function Footer() {
  return (
    <S.Container>
      <S.ContainerText>
        <S.Text>
          Este projeto foi desenvolvido por{" "}
          <S.Link
            href="https://www.linkedin.com/in/hebertmontarroyos-developer/"
            target="_blank"
          >
            Hebert Montarroyos
          </S.Link>{" "}
          com o objetivo de divulgar o <i>RPG Pugmire</i>, sem fins comerciais.
        </S.Text>
        <S.Text>
          {" "}
          Os lucros provenientes da venda dos livros são destinados
          exclusivamente à própria editora.{" "}
        </S.Text>
      </S.ContainerText>
      <S.ContainerPublishingCompany>
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <a
              href="https://newordereditora.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={NewOrder}
                alt={"Editora New Order"}
                width={"80px"}
                height={"30px"}
              />
            </a>
            <div style={{ display: "flex", gap: 20 }}>
              <a
                href="https://theonyxpath.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Onyx}
                  alt={"Onyx Path Publishing"}
                  width={"30px"}
                  height={"50px"}
                />
              </a>
              <a
                href="https://www.pugsteady.com/pugsteady"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={PugSteady}
                  alt={"Pug Steady"}
                  width={"37px"}
                  height={"50px"}
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <S.Text>
            Todos os direitos da obra <i>Pugmire</i> publicada no Brasil são de
            propriedade exclusiva da{" "}
            <S.Link href="https://newordereditora.com/" target="_blank">
              Editora New Order
            </S.Link>
            .
          </S.Text>
          <S.Text>
            Além disso, todos os direitos autorais e de propriedade intelectual
            relacionados a Pugmire são detidos pela empresa{" "}
            <S.Link href="https://www.pugsteady.com/pugsteady" target="_blank">
              Pug Steady
            </S.Link>
            , criadora da obra, em colaboração com a{" "}
            <S.Link href="https://theonyxpath.com/" target="_blank">
              Onyx Path Publishing
            </S.Link>
            .
          </S.Text>
        </div>
      </S.ContainerPublishingCompany>
    </S.Container>
  );
}

export default Footer;
