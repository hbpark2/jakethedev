import styled, { css } from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
  z-index: 100;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    min-height: 100vh;
  }
`;
