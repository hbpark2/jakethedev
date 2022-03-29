import React, { useState, useEffect, useContext } from "react";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import Background from "./components/Background/Background";
import ScrollCircle from "./components/ScrollCircle";
import { Container, SectionContainer, SectionInner } from "./styles";
import { Career, CareerInner } from "./components/Profile/styles";

import IntroBackground from "./components/IntroBackground/IntroBackground";
import { CurrentContext } from "../Context/ContextStore";

import Profile from "./components/Profile/Profile";
import Noise from "../Components/Common/Noise";
import Works from "./components/Works/Works";
import Resume from "./components/Resume/Resume";
import Modal from "../Components/Common/Modal";
import CareerPopup from "./components/Profile/components/CareerPopup";
import ProfilePopup from "./components/Profile/components/ProfilePopup";
import SkillSection from "./components/Profile/components/SkillSection";
import CareerItem from "./components/Profile/components/CareerItem";
import { careerArr } from "./components/Profile/components/careerData";

const Home = () => {
  const { currentPosition, changeCursorState, menuOpen, tabState, modalOpen } =
    useContext(CurrentContext);
  const [loading, setLoading] = useState<boolean>(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => setLoading(true);
  }, []);

  useEffect(() => {
    if (loading || menuOpen) {
      document.body?.classList.remove("overflow-unset");
      document.body?.classList.add("overflow-hidden");
    } else {
      document.body?.classList.remove("overflow-hidden");
      document.body?.classList.add("overflow-unset");
    }
  }, [loading, menuOpen]);

  useEffect(() => {
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
      {/* <ScrollCircle /> */}
      {!loading && <Cursor currentPosition={currentPosition} />}
      <Background />
      <Container aria-hidden={!menuOpen}>
        <h2 className="blind">contents</h2>

        {!loading && (
          <>
            <IntroBackground scrollY={scrollY} />
            {tabState.type === "Profile" && (
              <Profile
                loading={loading}
                scrollY={scrollY}
                changeCursorState={changeCursorState}
              />
            )}

            {tabState.type === "Skills" && (
              <SectionContainer scrl={scrollY}>
                <SectionInner>
                  <SkillSection isHome={true} />
                </SectionInner>
              </SectionContainer>
            )}

            {tabState.type === "Works" && (
              <SectionContainer scrl={scrollY}>
                <SectionInner>
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
                          {item.children}
                        </CareerItem>
                      ))}
                    </CareerInner>
                  </Career>
                </SectionInner>
              </SectionContainer>
            )}
          </>
        )}
        {window.innerWidth > 440 && <Noise />}
      </Container>
      {modalOpen !== "" && (
        <Modal>
          {modalOpen === "Profile" ? (
            <ProfilePopup />
          ) : (
            <CareerPopup modalState={modalOpen} />
          )}
        </Modal>
      )}
    </>
  );
};

export default Home;
