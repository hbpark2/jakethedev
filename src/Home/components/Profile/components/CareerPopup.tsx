import styled from "styled-components";
import THROADIMAGE from "../../../../Assets/screen-throad.png";

const Container = styled.div`
  padding: 30px 10px 20px;
  background-color: #fff;
  min-height: 100%;
`;

const Inner = styled.div``;

const ScreenImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 15px;
`;

interface CareerPopupProps {
  modalState: string;
}

const CareerPopup: React.FC<CareerPopupProps> = ({ modalState }) => {
  return (
    <Container>
      {modalState === "TH-ROAD" && (
        <Inner>
          <ScreenImage src={THROADIMAGE} alt="TH_ROAD_SCREEN" />
        </Inner>
      )}
    </Container>
  );
};

export default CareerPopup;
