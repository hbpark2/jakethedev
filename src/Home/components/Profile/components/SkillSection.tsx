import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { media } from "../../../../Styles/theme";
import { GitHubLinkWrap } from "../styles";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  ${media.laptopMax} {
    grid-template-columns: 1fr;
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border: 1px solid rgba(228, 203, 172, 0.3);
  border-radius: 25px;
  margin: 20px 0 40px;
  ${media.laptopMax} {
    &:first-child {
      margin-top: 25px;
    }
    &:last-child {
      margin-bottom: 30px;
    }
    margin: 10px 0;
  }
`;

const Title = styled.span<{ isHome?: boolean }>`
  position: absolute;
  top: -12.5px;
  left: 50%;
  padding: 0 15px;
  transform: translateX(-50%);
  text-align: center;
  border-radius: 10px;
  background-color: ${({ isHome }) => (isHome ? "transparent" : "#000")};
  font-weight: 700;
`;

const ItemListWrap = styled.ul`
  padding: 0 20px;
  li {
    display: flex;
    padding: 15px 0;
    &:not(:last-child) {
      border-bottom: 1px solid rgba(228, 203, 172, 0.3);
    }
  }
`;

const Description = styled.dl`
  dt {
    margin-bottom: 3px;
    span {
      font-size: 0.8em;
      opacity: 0.7;
    }
  }
  dd {
    font-family: ${({ theme: { paragraphFont } }) => paragraphFont};
    font-size: 0.8em;
    opacity: 0.7;
    line-height: 1.4em;

    display: flex;
    &::before {
      content: "- ";
      margin-right: 5px;
    }
  }
`;

const GitHubLinkWrapInSkill = styled(GitHubLinkWrap)`
  padding-left: 0;
  svg {
    margin-top: 5px;
    margin-right: 10px;
  }
  ${media.laptopMax} {
    flex-direction: row;
    padding: 0;
    margin-top: 5px;
    margin-right: 10px;
    margin-bottom: 0;
    svg {
      font-size: 30px;
    }
  }
`;

const SkillSection: React.FC<{ isHome?: boolean }> = ({ isHome }) => {
  return (
    <Container>
      <Wrap>
        <Title isHome={isHome}>Front-end</Title>
        <ItemListWrap>
          <li>
            <Description>
              <dt>React</dt>
              <dd>
                useContext를 이용한 효율적인 State관리와,
                <br />
                useEffect, useMemo 등을 이용해
                <br />
                라이프사이클을 관리할 수 있습니다.
              </dd>
              <dd>useform을 이용한 form 구현(로그인, 게시판)이 가능합니다.</dd>
            </Description>
          </li>
          <li>
            <Description>
              <dt>HTML5</dt>
              <dd>
                WAI-ARIA, Semantic tag를 사용해 <br />
                접근성과 SEO에 최적화된 마크업을 합니다.
              </dd>
              <dd>
                IE8이상의 IE, 모든 브라우저에 대한 크로스브라우징이 가능합니다.
              </dd>
            </Description>
          </li>
          <li>
            <Description>
              <dl>
                <dt>
                  CSS3 <span> (Sass, styled-component)</span>
                </dt>
                <dd>
                  CSS 작동원리를 이해하며 <br /> 자유롭게 레이아웃 구현할 수
                  있습니다. <br />
                </dd>
                <dd>미디어쿼리를 사용해 반응형 대응에 능합니다.</dd>
              </dl>
            </Description>
          </li>
          <li>
            <Description>
              <dl>
                <dt>
                  Javascript<span> (es5, es6, jQuery)</span>
                </dt>
                <dd>
                  인터랙티브한 동적 UI 구현이 가능하고,
                  <br />
                  내장함수들을 통해 다양한 기능구현이 가능합니다.
                </dd>
              </dl>
            </Description>
          </li>
          <li>
            <Description>
              <dt>Typscript</dt>
              <dd>React, styled-component 환경에서 유연하게 적용가능합니다.</dd>
            </Description>
          </li>
          <li>
            <Description>
              <dt>Next</dt>
              <dd>
                CSR의 약점인 SEO를 보완하기 위해 gatsby, remix 등의 <br />
                framework, lib를 알아보다 현재는 NEXT를 공부중입니다.
              </dd>
            </Description>
          </li>
        </ItemListWrap>
      </Wrap>
      <Wrap>
        <Title isHome={isHome}>Mobile App</Title>
        <ItemListWrap>
          <li>React Native</li>
          <li>Flutter</li>
        </ItemListWrap>
      </Wrap>
      {/* <Wrap>
        <Title isHome={isHome}>Back-end</Title>
        <ItemListWrap>
          <li>node.js</li>
          <li>nest.js</li>
          <li>Prisma</li>
          <li>graphQL</li>
          <li>PostgreSQL</li>
        </ItemListWrap>
      </Wrap> */}
      <Wrap>
        <Title isHome={isHome}>Version Control</Title>
        <ItemListWrap>
          <li>
            <Description>
              <dt>Git</dt>
              <dd>
                <GitHubLinkWrapInSkill className="pc-tablet-only" isPc={true}>
                  {/* <FontAwesomeIcon icon={faGithub} size="lg" /> */}
                  <a
                    href="https://github.com/hbpark2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Jake's GitHub
                  </a>
                </GitHubLinkWrapInSkill>
              </dd>
            </Description>
          </li>
          <li>github</li>
          {/* <li>
            <Description>
              <dt>Naver</dt>
              <dd>Naver map, login</dd>
            </Description>
          </li>
          <li>
            <Description>
              <dt>Kakao</dt>
              <dd>Kakao map, login</dd>
            </Description>
          </li> */}
        </ItemListWrap>
      </Wrap>
      <Wrap>
        <Title isHome={isHome}>Deployment</Title>
        <ItemListWrap>
          <li>Netlify</li>
          <li>Heroku</li>
          <li>Azure</li>
          <li>Cafe24</li>
        </ItemListWrap>
      </Wrap>
    </Container>
  );
};

export default SkillSection;
