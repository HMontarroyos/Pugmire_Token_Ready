import * as S from "./styled";
import { useLocation } from "react-router-dom";
import { HeaderAnimation } from "../../components";
import PugmireLogo from "../../assets/images/Pugmire_logo.png"

function Header() {
  const location = useLocation();

  const reloadPage = () => {
    if (location.pathname === "/") {
      window.location.reload();
    }
  };

  return (
    <S.Container>
      <HeaderAnimation />
      <S.Header>
        <S.Navigation>
          <S.LinkRedirect to={"/"} onClick={reloadPage}>
            <S.ContainerLogo>
              <S.Logo src={PugmireLogo} alt={"Pugmire"}/>
            </S.ContainerLogo>
          </S.LinkRedirect>
        </S.Navigation>
      </S.Header>
      <HeaderAnimation />
    </S.Container>
  );
}

export default Header;
