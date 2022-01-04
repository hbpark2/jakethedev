import styled from "styled-components";
import { FadeIn } from "../../../Styles/animation";

const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
  animation: ${FadeIn};
  animation-duration: 1s;
  cursor: initial;
`;

const Resume: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return <Container></Container>;
};

export default Resume;
