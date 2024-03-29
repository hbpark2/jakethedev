import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FadeIn } from "../../../Styles/animation";
import { media } from "../../../Styles/theme";

export const TabContainer = styled.ul<{ scrl: number }>`
  position: absolute;
  top: 50%;
  left: calc(50% + 430px);
  transform: translate(-50%, -50%);
  transition: filter 0.5s opacity 0.5s visibility 0.5s;
  z-index: 200;
  animation: ${FadeIn} 1s;
  min-width: 210px;

  ${({ scrl }) =>
    scrl > 1300
      ? css`
          position: fixed;
          left: auto;
          top: auto;
          transform: none;
          right: 50px;
          bottom: 50px;
        `
      : css`
          position: absolute;
        `};

  ${media.laptopMax} {
    display: none;
  }
  ${media.wideMin} {
    left: calc(50% + 900px);
  }
`;

export const TabList = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;
  word-break: keep-all;
  cursor: pointer;
  &:hover {
    button {
      background-color: ${({ theme: { accentColor } }) => accentColor};
      color: ${({ theme: { bgColor1 } }) => bgColor1};
    }
  }

  ${media.wideMin} {
    margin: 40px 0;
    font-size: 36px;
  }
`;

export const TabSpan = styled.span`
  display: block;
  margin-left: 10px;
  font-size: 22px;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  color: ${({ theme: { accentColor } }) => accentColor};
  font-weight: 400;

  ${media.wideMin} {
    margin-left: 30px;
  }
`;

export const TabSpanTop = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 2px;
`;

export const TabLine = styled.i<{ current: boolean }>`
  display: block;
  width: ${({ current }) => (current ? "100%" : "0")};
  height: 1px;
  margin-top: 5px;
  background-color: ${({ theme: { accentColor } }) => accentColor};
  transition: width 1s;
`;

export const TabButton = styled.button<{ current?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  padding: 10px;
  padding-bottom: 17px;
  border: 1px solid ${({ theme: { accentColor } }) => accentColor};
  font-family: ${({ theme: { accentFont } }) => accentFont};
  font-size: 28px;
  /* cursor: none; */
  transition: background-color 0.5s;
  border-radius: 50%;

  ${({ current, theme: { accentColor } }) =>
    current
      ? css`
          background-color: ${accentColor};
          color: ${({ theme: { bgColor1 } }) => bgColor1};
        `
      : css`
          background-color: transparent;
          color: ${accentColor};
        `};

  ${media.wideMin} {
    width: 120px;
    height: 120px;
    font-size: 52px;
  }
`;

export const TabLink = styled(Link)`
  display: flex;
  align-items: center;

  &:hover {
    button {
      background-color: ${({ theme: { accentColor } }) => accentColor};
      color: ${({ theme: { bgColor1 } }) => bgColor1};
    }
  }
`;

export const TabLinkBlankOnTab = styled(TabLink)``;
