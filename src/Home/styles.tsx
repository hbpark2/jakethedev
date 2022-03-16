import styled, { css } from "styled-components";
import { media } from "../Styles/theme";

export const Container = styled.main`
  position: relative;
  width: 100%;
  z-index: 100;

  ${media.laptopMax} {
    min-height: 100vh;
  }
`;
