import styled from "styled-components";
import { FadeIn } from "../../../Styles/animation";

export const Container = styled.article<{ scrl: number }>`
  position: relative;
  display: flex;
  margin: 0 auto;
  padding-bottom: 50px;
  z-index: 1;
  animation-name: ${FadeIn};
  animation-duration: 1s;
  font-size: 22px;
  padding: 100px 20px;
  padding-left: 160px;
  font-family: ${({ theme: { defaultFont } }) => defaultFont};
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 95%,
    rgba(77, 94, 101, 0) 100%
  );
`;
