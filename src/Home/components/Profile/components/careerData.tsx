import RVNIMAGE from "../../../../Assets/screen-rvn.png";
import KMAS2021IMAGE from "../../../../Assets/screen-kmas-2021.png";
import HWAMOEKIMAGE from "../../../../Assets/screen-hwamoek.png";
import KSALE2021IMAGE from "../../../../Assets/screen-ksale-2021.png";
import MUTACCATOIMAGE from "../../../../Assets/screen-mutaccato.png";
import THROADIMAGE from "../../../../Assets/screen-throad.png";
import styled from "styled-components";

const Container = styled.div`
  p {
    margin-bottom: 10px;
  }
`;

const DescriptionUl = styled.ul`
  .description-title {
    font-weight: 600;
    margin-bottom: 5px;
    &::before {
      content: "🖋 ";
    }
  }
  li {
    margin: 10px 0;
  }
  dd {
    &::before {
      content: "- ";
    }
  }
`;

const HwamoekParagraph = () => {
  return (
    <Container>
      <p>
        화목 프로젝트는 식물도감과 SNS기능을 갖춘 플랫폼입니다.
        <br />
        핵심기능으로는 관리자계정의 식물도감 CRUD, 유저의 게시글 CRUD 등이
        있습니다.
      </p>
      <p>
        Front-end 개발시에는 apollo cache를 이용해 게시글 또는 프로필 수정 시
        로딩시간을 줄여보려 했고,
        <br />
        기존에 비해 1-2초 정도의 로딩시간을 줄이는 효과적인 결과를 얻었습니다.
      </p>
      <p>
        Back-end의 경우 Apollo와 GraphQL, Prisma를 이용해 구성했고 Heroku로
        배포했습니다.
        <br />
        AWS S3를 이용해 사진업로드 기능을 구현했습니다.
      </p>
      <p>
        그리고 현재 javascript와 react로 만들었지만 SEO와 더 나은 유지보수를
        위해
        <br />
        NEXT와 typescript로 바꾸는 작업을 진행중입니다.
      </p>
    </Container>
  );
};

const RVNParagraph = () => {
  return (
    <Container>
      <p>
        shopify로 호스팅 중인 쇼핑몰의 이벤트 페이지 반응형 퍼블리싱을
        전담했습니다.
      </p>
      <p>
        이미 있는 플랫폼에 페이지를 추가해야하는 상황이였기 때문에
        <br />
        class명이 겹치지 않게, Heading태그의 중요도순으로 배치,
        <br />
        최대한 모든 화면에 대응하는 반응형, 웹 표준과 접근성에 신경쓰며
        작업했습니다.
      </p>
    </Container>
  );
};

const KmasParagrpah = () => {
  return (
    <Container>
      <p>
        K-MAS 프로젝트는 중소벤처기업부에서 크리스마스를 맞아
        <br />
        중소·소상공인을 대상으로 판매촉진과 홍보하는 행사 플랫폼입니다.
        <br />
        2020년, 2021년에 프론트엔드 및 퍼블리싱을 전담했습니다.
        <br />
      </p>
      <p>구현한 기능은 다음과 같습니다.</p>
      <DescriptionUl>
        <li>
          <dl>
            <dt className="description-title">소상공인 게시판</dt>
            <dd>업체또는 상품을 홍보할 수 있는 게시판입니다.</dd>
            <dd>react-hook-form, yup, react-query를 사용했습니다 .</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className="description-title">
              라이브커머스 시간표, 공연시간표
            </dt>
            <dd>현재날짜의 시간표를 표시해주는 시간표입니다.</dd>
          </dl>
        </li>
      </DescriptionUl>
    </Container>
  );
};

export const careerArr = [
  {
    type: "FRONT-END, BACK-END",
    title: "화목",
    subTitle: "화목 ( 개인 프로젝트 )",
    date: "2021.08.01 ~ ",
    children: <HwamoekParagraph />,
    skills: ["React", "React-Native", "Prisma", "GraphQL", "AWS S3"],
    images: [HWAMOEKIMAGE],
    url: "https://www.hwamoek.io/",
  },
  {
    type: "FRONT-END",
    title: "RVN",
    subTitle: "RVN event 이벤트 페이지",
    date: "2021.12.20 ~ 2021.12.23",
    // children:
    //   "shopify로 호스팅 중인 쇼핑몰의 이벤트 페이지 반응형 퍼블리싱을 전담했습니다.",
    children: <RVNParagraph />,
    isModal: false,
    skills: ["HTML5", "SCSS", "shopify"],
    images: [RVNIMAGE],
    // url: "https://rvn-event.netlify.app/",
    url: "https://rvnnyc.com/blogs/event/holidaypromotion-2112",
  },
  // {
  //   type: "FRONT-END",
  //   title: "TH-ROAD",
  //   subTitle: "디자이너 포트폴리오 ( 개인외주 )",
  //   date: "2021.12.01 ~ 2021.12.31",
  //   children:
  //     "반응형 디자이너 포트폴리오입니다. <br />웹접근성(WAI-ARIA)을 갖춘 HTML 구조와 반응형 CSS, <br /> 사용자 인터렉션 위주의 Javascript를 작성했습니다.",
  //   isModal: true,
  //   skills: ["React", "Typescript", "Netlify"],
  //   images: [THROADIMAGE],
  //   url: "",
  // },
  {
    type: "FRONT-END",
    title: "K-MAS",
    subTitle: "중소벤처기업부 ( 이벤트 사이트 )",
    date: "2021.11.01 ~ 2021.12.31",
    // children:
    //   "K-MAS 중소벤처기업부에서 진행한 이벤트 프로젝트에서 <br />퍼블리싱 및 Front-end 웹 개발을 전담했습니다.",
    children: <KmasParagrpah />,
    isModal: false,
    skills: ["React", "Typescript", "Google Analytics"],
    images: [KMAS2021IMAGE],
    url: "https://k-mas.org/",
  },

  {
    type: "FRONT-END",
    title: "K-SALE-2021",
    subTitle: "동행세일 ( 이벤트 사이트 )",
    date: "2021.05.22 ~ 2021.07.20",
    children:
      "K-SALE 2021 중소벤처기업부에서 진행한 이벤트 프로젝트에서 <br />퍼블리싱 및 Front-end 웹 개발을 전담했습니다.",
    isModal: false,
    skills: ["React", "Typescript"],
    images: [KSALE2021IMAGE],
    url: "https://ksale.org/",
  },
  // {
  //   type: "FRONT-END",
  //   title: "K-MAS-2020",
  //   subTitle: "중소벤처기업부 ( 이벤트 사이트 )",
  //   date: "2020.11.01 ~ 2021.12.31",
  //   children:
  //     "K-MAS-2020 중소벤처기업부에서 진행한 이벤트 프로젝트에서 <br /> 퍼블리싱을 전담했습니다.",
  //   isModal: true,
  //   skills: ["React"],
  //   images: [],
  //   url: "",
  // },
  // {
  //   type: "FRONT-END",
  //   title: "orderffrice",
  //   subTitle: "쇼핑몰 ( 사내 사이드프로젝트 )",
  //   date: "2020.08.01 ~ 2020.10.30",
  //   children:
  //     "orderffrice 사내에서 진행중이던 사이드프로젝트 중 프론트엔드 웹 개발을 전담했습니다.",
  //   isModal: true,
  //   skills: ["React"],
  //   images: [],
  //   url: "",
  // },
  {
    type: "FRONT-END",
    title: "Mutaccato",
    subTitle: "디자이너 포트폴리오 ( 개인외주 )",
    date: "2020.06.01 ~ 2020.07.01",
    children:
      "반응형 디자이너 포트폴리오입니다. <br /> 웹접근성(WAI-ARIA)을 갖춘 HTML 구조와 반응형 CSS, <br /> 사용자 인터렉션 위주의 Javascript를 담당했습니다.",
    isModal: false,
    skills: ["HTML5", "CSS3", "Javascript"],
    images: [MUTACCATOIMAGE],
    url: "http://mutaccato.com/",
  },
];
