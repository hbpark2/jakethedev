import styled, { css } from "styled-components";
import { FadeIn } from "../Styles/animation";
import { media } from "../Styles/theme";

export const Container = styled.main`
  position: relative;
  width: 100%;
  z-index: 100;

  ${media.laptopMax} {
    min-height: 100vh;
  }
`;

export const SectionContainer = styled.article<{ scrl: number }>`
  position: relative;
  display: flex;
  margin: 0 auto;
  padding-bottom: 50px;
  z-index: 1;
  animation-name: ${FadeIn};
  animation-duration: 1s;
  font-size: 22px;
  padding: 100px 20px;
  /* padding-left: 160px; */
  font-family: ${({ theme: { defaultFont } }) => defaultFont};

  background: rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 95%,
    rgba(77, 94, 101, 0) 100%
  );

  ${media.laptopMax} {
    padding-left: 0;

    ${({ scrl }) =>
      scrl > 800
        ? css`
            opacity: 1;
          `
        : css`
            opacity: 0;
            top: 1300px;
          `}
  }

  ${media.mobileMin} {
    ${({ scrl }) =>
      scrl > 800
        ? css`
            opacity: 1;
          `
        : css`
            opacity: 0;
            top: 1300px;
          `}
  }

  // 4K WIDEPC
  ${media.mobileMin} {
    ${({ scrl }) =>
      scrl > 800
        ? css`
            opacity: 1;
          `
        : css`
            opacity: 0;
            top: 2600px;
          `}
  }
`;

export const SectionInner = styled.div`
  padding-top: 120px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 22px;

  ${media.laptopMax} {
    width: 100%;
    margin: 0 auto;
  }
`;
