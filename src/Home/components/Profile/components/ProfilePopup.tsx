import styled from "styled-components";
import Profile from "../../../../Assets/portrait-3.png";
import ProfileImg from "../../../../Assets/portrait-1.jpg";

const Container = styled.div`
  padding: 30px 10px 20px;
  background-color: #fff;
  min-height: 100%;
  color: #333;
`;

const Inner = styled.div`
  display: flex;
  line-height: 1.6em;
  font-family: normal;
`;

const ProfileImageWrap = styled.div`
  position: relative;
  z-index: 500;
  width: 40%;
`;

const ProfileImage = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto;
  border-radius: 50px;
`;

const Paragraph = styled.div`
  width: 60%;
`;

const ProfilePopup = () => {
  return (
    <Container>
      <Inner>
        <ProfileImageWrap>
          <ProfileImage src={Profile} alt="profile image" />
        </ProfileImageWrap>
        <Paragraph>
          <p>
            계획적인 프론트엔드 개발자 박형빈입니다. 소통과 팀워크, 효율적인
            코드 등 프로젝트의 진행 중 중요한 요소들 모두가 구체적인 계획 안에서
            움직일 때 더욱 수월하게 움직일 수 있습니다. 그 계획은 프로젝트
            진행을 위한 계획일 수 있고 저 자신이 주어진 상황에 어떻게 대처할지에
            대한 계획 일 수 있습니다. 어떠한 길로 가고있는지에 대한 구체적인
            계획은 단 한줄의 코드보다 중요합니다. 이로 인해 각자 역할에서의
            소통, 팀워크 모두 놓치지 않는 개발자가 되고싶습니다.
          </p>
        </Paragraph>
      </Inner>
    </Container>
  );
};

export default ProfilePopup;
