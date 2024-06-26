import styled from "styled-components";
import { Link } from "react-scroll";

export const LinkRedirect = styled(Link)`
  text-decoration: none;
  padding-left: 20px;
  color: ${(props) => props.theme.colors.text};
  
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
