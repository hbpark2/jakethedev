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
                <span>Front-end developer</span> <br />
                based in Seoul, Korea
              </UnderLineSpan>
            </SectionInner>
          </NameWrap>
          <GitHubLinkWrap className="pc-tablet-only" isPc={true}>
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

          <Intro>
            <h3 className="blind">Intro</h3>

            <IntroParagraphWrap>
              {/* 웹의 기초는 구조라고 생각합니다. 
                  그렇기 떄문에 근거있는 HTML구조를 먼저 
                  구성하고 작업하는 것을 좋아합니다. */}

              <IntroParagraph>
                반갑습니다!😀
                <br />
                저는 2년차 FE개발자 박형빈입니다.
                <br />
                평소 관심이 있는 분야를 직접 구현해 배포해보며
                <br />
                공부하고 습득하는 것을 사람들에게 소개하는 것을 좋아합니다.
                <br />
                <br />
                우리가 살아가는 건물의 기초가 구조인 것처럼
                <br />
                우리가 활동하는 웹의 기초 또한 HTML구조라고 생각합니다.
                <br />
                그렇기 때문에 웹표준과 접근성을 바탕으로
                <br />
                근거있는 마크업을 작성하는 것을 우선하고
                <br />
                필요한 기능을 구현하는 작업 방식을 선호합니다.
                <br />
                <br />
                또 애자일을 적용하는 것에 흥미를 느끼고, 좋아해서
                <br />
                재사용이 가능하고 유지보수에 적합한
                <br />
                객체 지향 프로그래밍에 관심이 많습니다.
                <br />
                그리고 이에 대해 더 나은 방향에 대해 <br />
                사람들과 얘기 나누곤 합니다.
                <br />
                <br />
                사용자들 팀원들에게 또 어제의 저에게
                <br />
                보기 좋고, 쉬운 코드를 남기는 것이
                <br />
                저의 방향성이자 목표입니다.
                <br />
              </IntroParagraph>
            </IntroParagraphWrap>
          </Intro>

          <GitHubLinkWrap className="mobile-only" isPc={false}>
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
                  images={item.images}
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
