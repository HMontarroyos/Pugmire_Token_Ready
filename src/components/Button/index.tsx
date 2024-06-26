import React from "react";
import * as S from "./styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  outline?: boolean;
  children?: React.ReactNode;
}

function Button({
  width,
  height,
  children,
  outline,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <S.Button width={width} height={height} outline={outline} {...props}>
      {children}
    </S.Button>
  );
}

export default Button;
