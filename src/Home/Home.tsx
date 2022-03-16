import { useState, useEffect, useContext } from "react";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import Background from "./components/Background/Background";
import ScrollCircle from "./components/ScrollCircle";
import { Container } from "./styles";
import IntroBackground from "./components/IntroBackground/IntroBackground";
import { CurrentContext } from "../Context/ContextStore";

import Profile from "./components/Profile/Profile";
import Noise from "../Components/Common/Noise";
import Works from "./components/Works/Works";
import Resume from "./components/Resume/Resume";
import Modal from "../Components/Common/Modal";
import CareerPopup from "./components/Profile/components/CareerPopup";
import ProfilePopup from "./components/Profile/components/ProfilePopup";

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

            {tabState.type === "Front-end" && (
              <Works
                loading={loading}
                scrollY={scrollY}
                changeCursorState={changeCursorState}
                worksType="FRONT-END"
              />
            )}

            {tabState.type === "Back-end" && (
              <Works
                loading={loading}
                scrollY={scrollY}
                changeCursorState={changeCursorState}
                worksType="BACK-END"
              />
            )}
          </>
        )}
        <Noise />
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
