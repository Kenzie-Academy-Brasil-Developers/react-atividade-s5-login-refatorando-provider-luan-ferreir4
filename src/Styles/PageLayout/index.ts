import styled, { keyframes } from "styled-components";
const animatedBg = keyframes`
    0% {
      background-positon: left;
    }
    100% {
      background-position: right;
    }
`;

export const Page = styled.main`
  height: 100vh;
  width: 100vw;

  background-image: linear-gradient(45deg, #360033, #0b8793);
  background-size: 400%;

  animation: ${animatedBg} 12s infinite alternate;

`;

