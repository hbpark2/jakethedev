import RVNIMAGE from "../../../../Assets/screen-rvn.png";
import KMAS2021IMAGE from "../../../../Assets/screen-kmas-2021.png";
import HWAMOEKIMAGE from "../../../../Assets/screen-hwamoek.png";
import KSALE2021IMAGE from "../../../../Assets/screen-ksale-2021.png";
import MUTACCATOIMAGE from "../../../../Assets/screen-mutaccato.png";
import THROADIMAGE from "../../../../Assets/screen-throad.png";
import styled from "styled-components";
import { media } from "../../../../Styles/theme";

const Container = styled.div`
  p {
    margin-bottom: 10px;
  }
`;

const DescriptionUl = styled.ul`
  background-color: rgba(255, 255, 255, 0.9);
  width: calc(70% - 40px);
  padding: 20px;
  color: #000;
  border-radius: 15px;
  margin-bottom: 10px;
  .ps {
    border-top: 1px solid #333;
    padding-top: 10px;
  }
  .description-title {
    font-weight: 600;
    margin-bottom: 5px;
    display: flex;

    &::before {
      content: "🖋 ";
      margin-right: 5px;
    }
  }
  li {
    margin: 10px 0;
  }
  dd {
    display: flex;
    margin-left: 20px;
    font-size: 0.9em;
    &::before {
      content: "- ";
      margin-right: 5pxl;
    }
  }

  .only-list {
    display: flex;
    span {
      margin-right: 5px;
    }
  }

  ${media.laptopMax} {
    padding: 10px;
    width: calc(100% - 20px);
    line-height: 1.3em;
    .ps {
      font-size: 14px;
      line-height: 1.3em;
    }
    .description-title {
      font-size: 16px;
    }
    dd {
      margin-left: 10px;
    }
  }
`;

const HwamoekParagraph = () => {
  return (
    <Container>
      <p>
        화목은 개인 사이드 프로젝트이며 식물도감과 SNS 플랫폼입니다.
        <br />
        구현한 기능은 다음과 같습니다.
      </p>
      <DescriptionUl>
        <li>
          <dl>
            <dt className="description-title">
              유저, 식물도감, 게시글, 댓글과 답글 CRUD
            </dt>
            <dd>Backend는 apollo-express, prisma, grpahQL로 구성했습니다.</dd>
            <dd>
              회원가입과 로그인은 카카오로그인API를 사용해 간편로그인을
              구현했습니다.
            </dd>
            <dd>
              게시글 수정시(Update) apollo의 cache를 사용해 로딩시간을
              단축시켰습니다.
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className="description-title">게시글 인피니티 스크롤</dt>
            <dd>react-infinite-scroll 를 사용했습니다.</dd>
          </dl>
        </li>

        <li className="ps">
          현재 UI개선, 더 나은 SEO와 유지보수를 위해 NEXT와 Typescript로 바꾸는
          작업등의 고도화작업을 진행중입니다.
        </li>
      </DescriptionUl>
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
            <dd>
              게시글을 업로드하고 카테고리별로 검색할 수 있는 게시판입니다.
            </dd>
            <dd>react-hook-form, yup, react-query를 사용했습니다 .</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className="description-title">
              라이브커머스 시간표, 공연시간표
            </dt>
            <dd>현재날짜에 해당하는 시간표를 표시해주는 시간표입니다.</dd>
          </dl>
        </li>
      </DescriptionUl>
    </Container>
  );
};

const KsaleParagrpah = () => {
  return (
    <Container>
      <p>
        K-SALE 프로젝트는 중소·소상공인을 대상으로 판매촉진과 홍보하는 행사
        플랫폼입니다.
        <br />
        프론트엔드 및 퍼블리싱을 전담했습니다.
        <br />
      </p>
      <p>구현한 기능은 다음과 같습니다.</p>
      <DescriptionUl>
        <li>
          <dl>
            <dt className="description-title">소상공인 게시판</dt>
            <dd>
              게시글을 업로드하고 카테고리별로 검색할 수 있는 게시판입니다.
            </dd>
            <dd>
              react-hook-form, naver map API, react-daum-postcode를 사용해
              <br />
              위치와 그 위치의 정보를 검색할 수 있습니다.
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className="description-title">라이브커머스 시간표, 스트리밍</dt>
            <dd>
              현재날짜에 해당하는 시간표와 방송을 스트리밍 해주는 기능입니다.
            </dd>
          </dl>
        </li>
      </DescriptionUl>
    </Container>
  );
};

const MutaccatoParagrpah = () => {
  return (
    <Container>
      <p>
        Mutaccato는 디자이너의 포트폴리오 외주를 받아 진행한 프로젝트입니다.
      </p>
      <DescriptionUl>
        <li className="only-list">
          <span>🖋 </span>반응형으로 제작했습니다.
        </li>
        <li className="only-list">
          <span>🖋 </span>클라이언트가 요구한 디자인에, 인터랙티브한 javascript
          액션을 추가해서 작업했습니다.
        </li>
        <li className="only-list">
          <span>🖋 </span>초기에 HTML5, CSS, javascript로 구현하고 cafe24로
          호스팅 했고,
          <br />
          후에 유지보수에 용이하도록 react로 재구성하여 netlify에 배포했습니다.
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
    subTitle: "RVN event page",
    date: "2021.12.20 ~ 2021.12.23",
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
    subTitle: "중소벤처기업부 ( 행사 사이트 )",
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
    subTitle: "동행세일 ( 행사 사이트 )",
    date: "2021.05.22 ~ 2021.07.20",
    children: <KsaleParagrpah />,
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
    children: <MutaccatoParagrpah />,
    isModal: false,
    skills: ["HTML5", "CSS3", "Javascript"],
    images: [MUTACCATOIMAGE],
    url: "http://mutaccato.com/",
  },
];
