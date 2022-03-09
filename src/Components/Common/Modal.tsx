import { useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../Context/ContextStore";
import { FadeIn } from "../../Styles/animation";
import Noise from "./Noise";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 80vh;
  background-color: #fff;
  z-index: 500;
  border-radius: 15px;
  overflow-y: scroll;
  animation-name: ${FadeIn};
  animation-duration: 0.5s;
  box-shadow: 4px 4px 12px rgba(255, 255, 255, 0.5),
    -4px -4px 12px rgba(255, 255, 255, 0.5);
  &::-webkit-scrollbar {
    display: none;
  }

  /* &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.7);
    height: 20px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  } */

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    width: 300px;
  }
`;

const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 400;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  padding: 20px 10px;
  color: ${({ theme }) => theme.accentColor};
`;

interface ModalProps {
  children: React.ReactChild;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { setModalOpen } = useContext(CurrentContext);

  return (
    <>
      <Container>
        <CloseButton onClick={() => setModalOpen("")}>Close</CloseButton>
        {children}
        <Noise />
      </Container>
      <Layer onClick={() => setModalOpen("")} />
    </>
  );
};

export default Modal;
