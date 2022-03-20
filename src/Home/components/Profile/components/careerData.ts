import RVNIMAGE from "../../../../Assets/screen-rvn.png";
import KMAS2021IMAGE from "../../../../Assets/screen-kmas-2021.png";
import HWAMOEKIMAGE from "../../../../Assets/screen-hwamoek.png";
import KSALE2021IMAGE from "../../../../Assets/screen-ksale-2021.png";
import MUTACCATOIMAGE from "../../../../Assets/screen-mutaccato.png";
import THROADIMAGE from "../../../../Assets/screen-throad.png";

export const careerArr = [
  {
    type: "FRONT-END",
    title: "RVN",
    subTitle: "RVN event 이벤트 페이지",
    date: "2021.12.20 ~ 2021.12.23",
    children:
      "shopify로 호스팅 중인 쇼핑몰의 이벤트 페이지 퍼블리싱을 전담했습니다.",
    isModal: false,
    skills: ["HTML5", "SCSS", "shopify"],
    images: [RVNIMAGE],
    url: "https://rvnnyc.com/blogs/event/holidaypromotion-2112",
  },
  {
    type: "FRONT-END",
    title: "TH-ROAD",
    subTitle: "디자이너 포트폴리오 ( 개인외주 )",
    date: "2021.12.01 ~ 2021.12.31",
    children:
      "반응형 디자이너 포트폴리오입니다. <br />웹접근성(WAI-ARIA)을 갖춘 HTML 구조와 반응형 CSS, <br /> 사용자 인터렉션 위주의 Javascript를 담당했습니다.",
    isModal: true,
    skills: ["React", "Typescript", "Netlify"],
    images: [THROADIMAGE],
    url: "",
  },
  {
    type: "FRONT-END",
    title: "K-MAS-2021",
    subTitle: "중소벤처기업부 ( 이벤트 사이트 )",
    date: "2021.11.01 ~ 2021.12.31",
    children:
      "K-MAS 중소벤처기업부에서 진행한 이벤트 프로젝트에서 <br />퍼블리싱 및 Front-end 웹 개발을 전담했습니다.",
    isModal: false,
    skills: ["React", "Typescript", "Google Analytics"],
    images: [KMAS2021IMAGE],
    url: "https://k-mas.org/",
  },
  {
    type: "FRONT-END, BACK-END",
    title: "화목",
    subTitle: "화목 ( 개인 프로젝트 )",
    date: "2021.08.01 ~ ",
    children:
      "개인 프로젝트로 식물도감, SNS등의 기능을 구현한  Frontend, Backend, 앱 개발을 전담했습니다.",
    isModal: false,
    skills: ["React", "React-Native", "Prisma", "GraphQL"],
    images: [HWAMOEKIMAGE],
    url: "https://www.hwamoek.io/",
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
  {
    type: "FRONT-END",
    title: "K-MAS-2020",
    subTitle: "중소벤처기업부 ( 이벤트 사이트 )",
    date: "2020.11.01 ~ 2021.12.31",
    children:
      "K-MAS-2020 중소벤처기업부에서 진행한 이벤트 프로젝트에서 <br /> 퍼블리싱을 전담했습니다.",
    isModal: true,
    skills: ["React"],
    images: [],
    url: "",
  },
  {
    type: "FRONT-END",
    title: "orderffrice",
    subTitle: "쇼핑몰 ( 사내 사이드프로젝트 )",
    date: "2020.08.01 ~ 2020.10.30",
    children:
      "orderffrice 사내에서 진행중이던 사이드프로젝트 중 프론트엔드 웹 개발을 전담했습니다.",
    isModal: true,
    skills: ["React"],
    images: [],
    url: "",
  },
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
