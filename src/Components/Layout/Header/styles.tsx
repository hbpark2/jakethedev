import styled, { css } from "styled-components";
import { media } from "../../../Styles/theme";

export const Container = styled.header<{ menuHide: boolean }>`
  position: fixed;
  /* top: 0; */
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 80px);
  /* padding: 50px; */
  margin: 50px;
  z-index: 200;
  top: ${(props) => (props.menuHide ? "-120px" : "0px")};
  transition: top 0.5s;

  ${media.laptopMax} {
    width: calc(100% - 50px);
    padding: 30px;
    padding: 0;
    margin: 30px 25px;
  }
`;

export const Logo = styled.h1`
  position: relative;
  z-index: 205;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  color: ${({ theme: { accentColor } }) => accentColor};
  font-size: 48px;
  ${media.laptopMax} {
    font-size: 26px;
  } ;
`;

export const MenuBtn = styled.button<{ disable?: boolean }>`
  display: ${({ disable }) => (disable ? "none" : "block")};
  /* position: fixed;
  top: 55px;
  right: 55px; */
  z-index: 205;
  color: ${({ theme: { accentColor } }) => accentColor};
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 24px;

  ${media.laptopMax} {
    top: 30px;
    right: 25px;
  }
`;

export const Nav = styled.nav<{ menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColor2};
  transition: opacity 1s, visibility 1s, transform 1s, background-color 1s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);

  ${({ menuOpen }) =>
    menuOpen
      ? css`
          visibility: visible;
          opacity: 1;
          transform: translateX(0) skew(0deg);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transform: translateX(-100%) skew(50deg);
        `}
`;

export const NavUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  transform: translateX(-10%);

  ${media.laptopMax} {
    transform: translateX(-30%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NavList = styled.li<{ index: number; menuOpen: boolean }>`
  display: flex;
  align-items: center;
  margin: 20px 0;
  transition: opacity 2s, visibility 2s, transform 2s;

  ${({ menuOpen, index }) =>
    menuOpen
      ? css`
          visibility: visible;
          opacity: 1;
          transform: translateX(${index * 60}px);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transform: translateX(${index}px);
        `}

  ${media.laptopMax} {
    transform: ${({ index }) => `translateX(${index * 40}px)`};
    margin: 20px 0;
  }
`;

export const LinkButton = styled.button<{ current: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 10px;
  padding-bottom: 17px;
  border: 1px solid ${({ theme: { accentColor } }) => accentColor};
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 36px;
  color: ${({ theme: { accentColor } }) => accentColor};
  cursor: none;
  transition: background-color 0.5s;
  border-radius: 50%;

  ${({ current, theme: { accentColor } }) =>
    current
      ? css`
          background-color: ${accentColor};
          color: ${({ theme: { bgColor2 } }) => bgColor2};
        `
      : css`
          background-color: transparent;
          color: ${accentColor};
        `};

  &:hover {
    background-color: ${({ theme: { accentColor } }) => accentColor};
    color: ${({ theme: { bgColor2 } }) => bgColor2};
  }

  ${media.laptopMax} {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }

  ${media.wideMin} {
    width: 120px;
    height: 120px;
    font-size: 52px;
  }
`;

export const LinkSpan = styled.span`
  display: block;
  margin-left: 10px;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 42px;
  color: ${({ theme: { accentColor } }) => accentColor};
  font-weight: 700;

  ${media.laptopMax} {
    font-size: 24px;
  }

  ${media.wideMin} {
    margin-left: 30px;
  }
`;

export const LinkLine = styled.i<{ current: boolean }>`
  display: block;
  width: ${({ current }) => (current ? "100%" : "0")};
  height: 2px;
  margin-top: 5px;
  background-color: ${({ theme: { accentColor } }) => accentColor};
  transition: width 1s;
`;
