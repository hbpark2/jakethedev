import styled, { css } from "styled-components";
import { FadeIn } from "../../../Styles/animation";
import ProfileImage from "../../../Assets/portrait-3.png";

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
  /* padding-left: 160px; */
  font-family: ${({ theme: { defaultFont } }) => defaultFont};
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 95%,
    rgba(77, 94, 101, 0) 100%
  );

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-left: 0;
    /* padding-right: 0; */
    /* padding: 0 10px; */

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

  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
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
  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
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

export const Inner = styled.div`
  padding-top: 120px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 22px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const NameWrap = styled.div`
  width: 94%;
  margin: 0 auto;
  padding: 100px 50px 20px;
  line-height: 1.5em;

  & > div {
    /* padding-left: 140px; */
    padding-left: 44px;
  }
  .name-span {
    font-size: 62px;
    line-height: 1.4em;
    font-weight: 900;
    letter-spacing: 5px;
    font-family: ${({ theme: { accentFont } }) => accentFont};
  }

  .small-span {
    font-size: 22px;
  }
  .border-bottom {
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme: { accentColor } }) => accentColor};
  }

  &::before {
    content: "(00)-name";
    display: block;
    /* font-family: ${({ theme: { accentFont } }) => accentFont}; */
    font-family: ${({ theme: { paragraphFont } }) => paragraphFont};
    margin-bottom: 20px;
    text-align: start;
    /* font-size: 24px; */
    font-size: 18px;
    line-height: 1em;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    /* width: 40%; */
    padding: 10px;
    & > div {
      padding-left: 0px;
    }
    .name-span {
      display: block;
      font-size: 42px;
      line-height: 1.2em;
      font-weight: 900;
      /* letter-spacing: inherit; */
      margin: 10px 0 0;
    }
    .small-span {
      font-size: 28px;
    }
  }
`;

export const SectionInner = styled.div``;

export const UnderLineSpan = styled.span`
  /* margin-left: 40px; */
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme: { accentColor } }) => accentColor};
  line-height: 1.7em;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    /* margin-left: 20px; */
  }
`;

export const Intro = styled(NameWrap)`
  padding: 50px 50px 0 50px;

  &::before {
    content: "(01)-intro";
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 20px 20px 0 20px;
  }
`;

export const IntroParagraphWrap = styled.div`
  margin: 20px 0;
  font-size: 20px;
  line-height: 1.5em;
  padding: 20px 0;
  font-family: ${({ theme: { paragraphFont } }) => paragraphFont};

  blockquote {
    font-size: 14px;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-left: 0;
  }
`;

export const IntroParagraph = styled.p`
  width: 550px;
  border-radius: 15px;
  /* padding: 20px; */
  /* border: 1px solid ${({ theme: { accentColor } }) => accentColor}; */
  line-height: 1.7em;
  font-size: 20px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 300px;
    font-size: 15px;
  }
`;

export const GitHubLinkWrap = styled.span`
  display: flex;
  /* padding-left: 190px; */
  padding-left: 100px;
  margin-top: 20px;
  align-items: center;
  a {
    margin-left: 10px;
    line-height: 1.4em;
    text-decoration-line: underline;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    flex-direction: column;
    padding: 0;
    margin: 40px 0;
    svg {
      font-size: 70px;
      margin-bottom: 20px;
    }
  }
`;

export const NameSpan = styled.span`
  font-size: 24px;
`;

export const Skill = styled(NameWrap)`
  padding: 50px 50px 0 50px;
  &::before {
    content: "(02)-skills";
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 20px 20px 0 20px;
  }
`;

export const SkillWrap = styled.div`
  font-size: 22px;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Career = styled(NameWrap)`
  padding: 50px 50px 0 50px;
  min-height: 100vh;
  font-family: ${({ theme: { paragraphFont } }) => paragraphFont};

  &::before {
    content: "(03)-career";
    color: rgba(255, 255, 255, 0.7);
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding: 20px 20px 0 20px;
  }
`;

export const CareerInner = styled.div`
  color: ${({ theme: { bgColor1 } }) => bgColor1};
`;

export const ProfileRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export const ProfileImageWrap = styled.div`
  margin-top: 150px;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background: url(${ProfileImage}) no-repeat;
  background-size: cover;
  background-position: center 35%;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid ${({ theme: { accentColor } }) => accentColor};
  @media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
    display: none;
  }
`;
