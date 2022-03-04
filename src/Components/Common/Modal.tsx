import { useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../Context/ContextStore";

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
  padding: 7px 10px;
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
      </Container>

      <Layer onClick={() => setModalOpen("")}></Layer>
    </>
  );
};

export default Modal;
