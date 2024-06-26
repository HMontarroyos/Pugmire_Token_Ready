import styled, { keyframes } from "styled-components";

export const AnimationGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const HeaderAnimation = styled.header`
  background-size: 200% 200%;
  animation: ${AnimationGradient} 2s linear infinite alternate;
  background-image: linear-gradient(
    -45deg,
    #8d7f26,
    #ccb842,
    #d0bf82,
    #f8e374
  );
  width: 100%;
  height: 5px;
`;
