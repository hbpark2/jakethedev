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
} from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CareerItem from "./components/CareerItem";
import { careerArr } from "./components/careerData";
import { CurrentContext } from "../../../Context/ContextStore";
import Modal from "../../../Components/Common/Modal";
import CareerPopup from "./components/CareerPopup";

const Profile: React.FC<{
  loading: boolean;
  scrollY: number;
  changeCursorState: Function;
}> = ({ loading, scrollY, changeCursorState }) => {
  const { modalOpen } = useContext(CurrentContext);

  useEffect(() => {
    console.log(modalOpen);
    const mainTarget = document.querySelector("main")! as HTMLElement;

    if (modalOpen !== "") {
      document.body?.classList.remove("overflow-unset");
      document.body?.classList.add("overflow-hidden");
      mainTarget?.setAttribute("aria-hidden", "true");
    }

    if (modalOpen === "") {
      document.body?.classList.remove("overflow-hidden");
      document.body?.classList.add("overflow-unset");
      mainTarget?.setAttribute("aria-hidden", "false");
    }
  }, [modalOpen]);

  return (
    <>
      <Container scrl={scrollY} aria-hidden={!loading}>
        <Inner>
          <ProfileImageWrap />
          <NameWrap
            onMouseOver={() => changeCursorState("image")}
            onMouseOut={() => changeCursorState("")}
          >
            <h3 className="blind">name : 박형빈 @jake @7ransis7or</h3>
            <span>B. 1995</span>
            <br />
            <span className="name-span">
              Hyeong Bin. Paak <span className="small-span">@Jake</span>
            </span>
            <br />
          </NameWrap>
          <UnderLineSpan>Front-end developer.</UnderLineSpan>

          <Intro>
            <h3 className="blind">Intro</h3>

            <IntroParagraph>
              I'm Front-end developer based in Seoul, Korea
            </IntroParagraph>
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

            <SkillWrap>
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
            </SkillWrap>
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
      {modalOpen !== "" && (
        <Modal>
          <CareerPopup modalState={modalOpen} />
        </Modal>
      )}
    </>
  );
};

export default Profile;
