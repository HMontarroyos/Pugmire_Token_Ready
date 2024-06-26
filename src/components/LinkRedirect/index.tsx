import * as S from "./styled";

interface LinkRedirectProps {
  link: string;
  name: string;
}

const LinkRedirect: React.FC<LinkRedirectProps> = ({ link, name }) => {
  return (
    <S.LinkRedirect to={link} smooth={true} duration={500}>
      {name}
    </S.LinkRedirect>
  );
};

export default LinkRedirect;
