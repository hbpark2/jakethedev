import { useContext } from "react";
import styled from "styled-components";
import { CurrentContext } from "../../Context/ContextStore";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  background-color: #fff;
  z-index: 500;
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

interface ModalProps {
  children: React.ReactChild;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { setModalOpen } = useContext(CurrentContext);
  return (
    <>
      <Container>{children}</Container>
      <Layer onClick={() => setModalOpen(false)}></Layer>
    </>
  );
};

export default Modal;
