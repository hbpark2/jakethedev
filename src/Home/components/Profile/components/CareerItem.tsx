import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrentContext } from "../../../../Context/ContextStore";

const Container = styled.div`
  margin: 40px 0;

  .career-title {
    font-family: ${({ theme: { defaultFont } }) => defaultFont};
    font-weight: 900;
    font-size: 42px;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.9);
  }

  .career-subtitle {
    margin-left: 10px;
    font-family: ${({ theme: { paragraphFont } }) => paragraphFont};
    color: rgba(255, 255, 255, 0.8);
  }
  .date {
    display: block;
    opacity: 0.6;
    font-size: 16px;
  }
`;

const CareerTypeWrap = styled.ul`
  display: flex;
  margin-bottom: 15px;
  .carrer-type {
    display: block;
    width: 150px;
    text-align: center;
    padding: 5px 10px;
    margin-bottom: 10px;
    margin-right: 5px;
    font-family: ${({ theme: { defaultFont } }) => defaultFont};
    color: rgba(255, 255, 255, 0.9);
    border-radius: 25px;
    border: 1px solid ${({ theme: { bgColor1 } }) => bgColor1};
  }
`;

const CareerParagraph = styled.p`
  padding: 15px 0;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

const Line = styled.i`
  display: block;
  width: 70%;
  height: 1px;
  /* background-color: ${({ theme: { accentColor } }) => accentColor}; */
  background-color: ${({ theme: { bgColor1 } }) => bgColor1};
  opacity: 0.6;
`;

const LinkButton = styled(Link)`
  display: block;
  width: 70%;
  text-align: center;
  padding: 20px 0;
  margin: 10px 0 20px;
  border: 1px solid ${({ theme: { bgColor1 } }) => bgColor1};
  border-radius: 15px;
  transition: 0.5s;
  transition-property: color, background-color;
  &:hover {
    background-color: ${({ theme: { bgColor1 } }) => bgColor1};
    color: #fff;
  }
`;

interface CareerItemProps {
  type: string;
  title: string;
  subTitle: string;
  date: string;
  children: React.ReactNode;
}

const CareerItem: React.FC<CareerItemProps> = ({
  type,
  title,
  subTitle,
  date,
  children,
}) => {
  const { changeCursorState } = useContext(CurrentContext);

  return (
    <Container>
      <h4>
        <CareerTypeWrap>
          {type.split(",").map((item, index) => (
            <li className="carrer-type" key={`type ${index}`}>
              {item}
            </li>
          ))}
        </CareerTypeWrap>
        <span className="career-title">{title}</span>
        <span className="career-subtitle">{subTitle}</span>
        <span className="date">{date}</span>
      </h4>
      <CareerParagraph>{children}</CareerParagraph>
      <LinkButton
        to={`/detail/${title}`}
        onMouseOver={() => changeCursorState("bigger")}
        onMouseOut={() => changeCursorState("")}
      >
        Go to {title}
      </LinkButton>
      <Line />
    </Container>
  );
};

export default CareerItem;
