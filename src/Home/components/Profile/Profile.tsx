import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Inner,
  NameWrap,
  Skill,
  Intro,
  SkillWrap,
  IntroParagraph,
  Career,
  CareerInner,
  GitHubLinkWrap,
  ProfileImageWrap,
  ProfileRow,
  UnderLineSpan,
  SectionInner,
  IntroParagraphWrap,
} from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CareerItem from "./components/CareerItem";
import { careerArr } from "./components/careerData";
import { CurrentContext } from "../../../Context/ContextStore";
import SkillSection from "./components/SkillSection";

const Profile: React.FC<{
  loading: boolean;
  scrollY: number;
  changeCursorState: Function;
}> = ({ loading, scrollY, changeCursorState }) => {
  const { modalOpen, setModalOpen } = useContext(CurrentContext);

  return (
    <>
      <Container scrl={scrollY} aria-hidden={!loading}>
        <Inner>
          <ProfileImageWrap />
          <NameWrap
            // onClick={() => setModalOpen("Profile")}
            onMouseOver={() => changeCursorState("image")}
            onMouseOut={() => changeCursorState("")}
          >
            <SectionInner>
              <h3 className="blind">name : 박형빈 @jake @7ransis7or</h3>
              <span>B. 1995</span>
              <br />
              <span className="name-span">
                Hyeong Bin. Paak <span className="small-span">@Jake</span>
              </span>
              <br />
              <UnderLineSpan>
                Front-end developer <br />
                based in Seoul, Korea
              </UnderLineSpan>
            </SectionInner>
          </NameWrap>

          <Intro>
            <h3 className="blind">Intro</h3>

            <IntroParagraphWrap>
              <IntroParagraph>
                반갑습니다!😀
                <br />
                저는 2년차 FE개발자 박형빈입니다.
                <br />
                공부하고 적용하고 응용하는 것을 좋아합니다.
                <br />
                <br />
                웹표준과 접근성을 바탕으로 근거있는 마크업을 작성합니다.
                <br />
                재사용이 가능하고 유지보수에 적합한
                <br />
                객체 지향 프로그래밍에 관심이 많습니다.
                <br />
                <br />
                코드를 읽는 사람 입장에서 생각하는 걸 좋아해서 계속 고민하며
                <br />
                더 나은 방향에 대해 사람들과 얘기 나누곤 합니다.
                <br />
                프로덕트가 사용자들의 기억에 남도록 하는 게 저의 일입니다.
              </IntroParagraph>
            </IntroParagraphWrap>
          </Intro>

          <GitHubLinkWrap>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <a
              href="https://github.com/hbpark2/"
              target="_blank"
              rel="noreferrer"
              onMouseOver={() => changeCursorState("jake")}
              onMouseOut={() => changeCursorState("")}
            >
              Go to Jake's GitHub
            </a>
          </GitHubLinkWrap>

          <Skill>
            <h3 className="blind">Skills</h3>
            <SkillSection />

            {/* <SkillWrap>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Node</li>
                <li>Git & Github</li>
                <li>GraphQL</li>
                <li>Apollo</li>
                <li>Prisma</li>
                <li>AWS S3</li>
                <li>Heroku</li>
                <li>Azure</li>
                <li>Netlify</li>
              </ul>
            </SkillWrap> */}
          </Skill>

          <Career>
            <h3 className="blind">Project</h3>
            <CareerInner>
              {careerArr.map((item, index) => (
                <CareerItem
                  key={`career ${index}`}
                  type={item.type}
                  title={item.title}
                  subTitle={item.subTitle}
                  date={item.date}
                  isModal={item.isModal}
                  skills={item.skills}
                  url={item.url}
                >
                  {item.children.split("<br />").map((line, index) => {
                    let makeSpanKey = `line${index}`;
                    return (
                      <React.Fragment key={makeSpanKey}>
                        {line}
                        <br />
                      </React.Fragment>
                    );
                  })}
                </CareerItem>
              ))}
            </CareerInner>
          </Career>
        </Inner>
      </Container>
    </>
  );
};

export default Profile;
