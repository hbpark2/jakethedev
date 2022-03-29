import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrentContext, modalType } from "../../../../Context/ContextStore";
import { media } from "../../../../Styles/theme";

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

  ${media.laptopMax} {
    margin-top: 20px;
    .career-title {
      font-size: 36px;
    }
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
  ${media.laptopMax} {
    .carrer-type {
      width: 120px;
    }
    font-size: 16px;
  }
`;

const CareerParagraph = styled.div`
  padding: 7px 0 0;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4em;
`;

const Line = styled.i`
  display: block;
  width: 70%;
  height: 1px;
  /* background-color: ${({ theme: { accentColor } }) => accentColor}; */
  background-color: ${({ theme: { bgColor1 } }) => bgColor1};
  opacity: 0.6;
  ${media.laptopMax} {
    width: 100%;
  }
`;

const LinkButton = styled.a`
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

const LinkWrap = styled.a`
  display: block;
`;

const ModalButton = styled.button`
  display: block;
  width: 70%;
  text-align: center;
  padding: 20px 0;
  margin: 10px 0 20px;
  border: 1px solid ${({ theme: { bgColor1 } }) => bgColor1};
  border-radius: 15px;
  color: inherit;
  font-size: 22px;
  transition: 0.5s;
  transition-property: color, background-color;
  &:hover {
    background-color: ${({ theme: { bgColor1 } }) => bgColor1};
    color: #fff;
  }
`;

const SkillWrap = styled.dl`
  display: flex;
  align-items: center;
  dd {
    display: inline;
    font-size: 16px;
    line-height: 1em;
    margin-right: 5px;
    &:not(:last-child) {
      &::after {
        content: ", ";
      }
    }
  }

  ${media.laptopMax} {
    dd {
      font-size: 14px;
    }
  }
`;

const SkillTitle = styled.dt`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

const ImageWrap = styled.div`
  padding: 10px 0 20px;
  img {
    display: block;
    width: 70%;
  }
  ${media.laptopMax} {
    img {
      width: 100%;
    }
  }
`;

interface CareerItemProps {
  type: string;
  title: string | modalType;
  subTitle: string;
  date: string;
  children: React.ReactNode | React.FC;
  isModal?: boolean;
  skills?: string[];
  images?: string[];
  url?: string;
  worksType?: string;
}

const CareerItem: React.FC<CareerItemProps> = ({
  type,
  title,
  subTitle,
  date,
  children,
  isModal,
  skills,
  images,
  url,
}) => {
  const { setModalOpen, changeCursorState } = useContext(CurrentContext);

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

      {isModal ? (
        <ImageWrap>
          {images && images.length > 0 && (
            <img src={images[0]} alt="미리보기 이미지" />
          )}
        </ImageWrap>
      ) : (
        <LinkWrap
          href={url && url}
          target="_blank"
          title="go to detail page"
          rel="norefferer noreferrer"
          onMouseOver={() => changeCursorState("viewDetail")}
          onMouseOut={() => changeCursorState("")}
        >
          <ImageWrap>
            {images && images.length > 0 && (
              <img src={images[0]} alt="미리보기 이미지" />
            )}
          </ImageWrap>
        </LinkWrap>
      )}

      {/* {skills && skills.length > 0 && (
        <SkillWrap>
          <SkillTitle>Using: </SkillTitle>
          {skills.map((item, index) => (
            <dd key={`skill${index}`}>{item}</dd>
          ))}
        </SkillWrap>
      )} */}

      <Line />
    </Container>
  );
};

export default CareerItem;
