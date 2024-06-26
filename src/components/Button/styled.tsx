import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  outline?: boolean;
}

export const Button = styled.button<Props>`
  margin-top: 40px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: white;
  background-color: #0b2a77;
  border: ${(props) => (props.outline ? "2px solid #53cfd0" : "none")};
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    color: #53cfd0;
    box-shadow: ${(props) =>
      props.outline ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.25)"};
    transform: scale(1.1);
  }
`;
