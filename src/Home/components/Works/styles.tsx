import styled from "styled-components";
import { media } from "../../../Styles/theme";
import { NameWrap } from "../Profile/styles";

export const Career = styled.div`
  width: 90%;
  margin: 0 auto;
  line-height: 1.5em;
  padding: 50px 50px 0 50px;
  min-height: 100vh;
  font-family: ${({ theme: { paragraphFont } }) => paragraphFont};
  & > div {
    padding-left: 140px;
  }
  .name-span {
    font-size: 62px;
    line-height: 1.8em;
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

  ${media.laptopMax} {
    padding: 20px 20px 0 20px;
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

export const CareerInner = styled.div`
  color: ${({ theme: { bgColor1 } }) => bgColor1};
`;
