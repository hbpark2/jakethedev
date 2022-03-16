import styled from "styled-components";
import { media } from "../../../../Styles/theme";

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
  /* justify-content: center; */
  /* width: 100%; */
  /* width: 80%; */
  padding: 30px 0;
  border: 1px solid rgba(228, 203, 172, 0.3);
  border-radius: 25px;
  margin: 20px 0 40px;
  ${media.laptopMax} {
    margin: 20px 0;
  }
`;

const Title = styled.span`
  position: absolute;
  top: -20px;
  left: 50%;
  /* width: 80%; */
  padding: 0 15px;
  transform: translateX(-50%);
  text-align: center;
  /* border: 1px solid ${({ theme: { accentColor } }) => accentColor}; */
  border-radius: 10px;
  background-color: #000;
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
    /* opacity: 0.7; */
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
  }
`;

const SkillSection = () => {
  return (
    <Container>
      <Wrap>
        <Title>Front-end</Title>
        <ItemListWrap>
          <li>
            <Description>
              <dt>HTML5</dt>
              <dd>
                WAI-ARIA, Semantic을 사용해 <br />
                SEO에 최적화된 마크업을합니다.
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
                  있습니다.
                </dd>
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
              <dd></dd>
            </Description>
          </li>
          <li>
            <Description>
              <dt>React</dt>
              <dd>
                효율적인 State관리와,
                <br />
                useEffect, useMemo 등을 이용해
                <br />
                라이프사이클을 관리할 수 있습니다.
              </dd>
            </Description>
          </li>
          <li>
            <Description>
              <dt>Next</dt>
              <dd></dd>
            </Description>
          </li>
        </ItemListWrap>
      </Wrap>
      <Wrap>
        <Title>Mobile App</Title>
        <ItemListWrap>
          <li>React Native</li>
          <li>Flutter</li>
        </ItemListWrap>
      </Wrap>
      <Wrap>
        <Title>Back-end</Title>
        <ItemListWrap>
          <li>node.js</li>
          <li>nest.js</li>
          <li>Prisma</li>
          <li>graphQL</li>
          <li>PostgreSQL</li>
        </ItemListWrap>
      </Wrap>
      <Wrap>
        <Title>Version Control</Title>
        <ItemListWrap>
          <li>Git</li>
          <li>github</li>
        </ItemListWrap>
      </Wrap>
      <Wrap>
        <Title>Deployment</Title>
        <ItemListWrap>
          <li>Netlify</li>
          <li>Azure</li>
          <li>Cafe24</li>
        </ItemListWrap>
      </Wrap>
    </Container>
  );
};

export default SkillSection;
