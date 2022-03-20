import { createGlobalStyle, DefaultTheme, keyframes } from "styled-components";
import reset from "styled-reset";

// Media query
const deviceSizes = {
  mobile: 576,
  tablet: 768,
  laptop: 1024,
  nomalPC: 1440,
  wide: 1920,
};

const deviceMax = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
  laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
  nomalPC: `screen and (max-width: ${deviceSizes.nomalPC}px)`,
};

const deviceMin = {
  mobile: `screen and (min-width: ${deviceSizes.mobile + 1}px)`,
  tablet: `screen and (min-width: ${deviceSizes.tablet + 1}px)`,
  laptop: `screen and (min-width: ${deviceSizes.laptop + 1}px)`,
  wide: `screen and (min-width: ${deviceSizes.wide + 1}px)`,
};

// make new MediaQuery Fn
const customMediaQuery = (screenWidth: number, type: "min" | "max"): string => {
  return `@media (${
    type === "max" ? "max-width" : "min-width"
  }: ${screenWidth}px)`;
};

export const media = {
  custom: customMediaQuery,
  wideMax: customMediaQuery(1920, "max"),
  pcMax: customMediaQuery(1440, "max"),
  laptopMax: customMediaQuery(1024, "max"),
  tabletMax: customMediaQuery(768, "max"),
  mobileMax: customMediaQuery(576, "max"),
  wideMin: customMediaQuery(1921, "min"),
  pcMin: customMediaQuery(1441, "min"),
  laptopMin: customMediaQuery(1025, "min"),
  tabletMin: customMediaQuery(769, "min"),
  mobileMin: customMediaQuery(577, "min"),
};
//

export const navyTheme: DefaultTheme = {
  bgColor1: "#4d5e65",
  bgColor2: "#706260",
  bgColor3: "#9a7951",
  accentColor: "#e4cbac",
  accentFont: '"Cormorant Garamond", "Nanum Myeongjo", serif',
  defaultFont: '"Nanum Myeongjo", serif',
  paragraphFont: '"Nanum Gothic", serif',
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  fullHeight: window.innerWidth > 639 ? "100vh" : `${window.innerHeight}px`,
  deviceScreenMax: deviceMax,
  deviceScreenMin: deviceMin,
};

export const skyblueTheme: DefaultTheme = {
  bgColor1: "#8ACAEB",
  bgColor2: "#4d5e65",
  bgColor3: "#706260",
  accentColor: "#fff",
  accentFont: '"Cormorant Garamond", "Nanum Myeongjo", serif',
  defaultFont: '"Nanum Myeongjo", serif',
  paragraphFont: '"Nanum Gothic", serif',
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  fullHeight: window.innerWidth > 639 ? "100vh" : `${window.innerHeight}px`,
  deviceScreenMax: deviceMax,
  deviceScreenMin: deviceMin,
};

//global
export const GlobalStyles = createGlobalStyle`
  ${reset}

/* setting */
  /* html{
    font-size: 1px !important;
  }
  body{
    font-size: 1rem !important;
  } */

	body, html{
		height:100%;
	}
  
  body{
    font-family: 'Nanum Myeongjo', 'Noto Sans KR', sans-serif;  
    color:${({ theme: { accentColor } }) => accentColor};
		background-color:${(props) => props.theme.bgColor1};
		transition: background-color 0.5s;
	}

  main{
    width: auto;
    transition: all .5s;
  }

  a {
    text-decoration: none;
  }

	body::-webkit-scrollbar {
	width: 5px;
	height:5px;
	}

	body::-webkit-scrollbar-thumb {
		background-color: rgba(255,255,255,0.7);
		height: 20px;
		border-radius: 10px;
	}

	body::-webkit-scrollbar-track {
		background-color: rgba(0,0,0,0.1);
	}

	.overflow-hidden{
		overflow:hidden;
	}
  
	.overflow-unset{
		overflow:unset;
	}

  // 접근성 고려한 IR 
	.blind {
    overflow: hidden;
    display: inline-block;
    position: absolute;
    z-index: -1;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
	}

  .pc-tablet-only {
        display: block !important;
        ${media.mobileMax} {
            display: none !important;
        }
    }
    .tablet-mobile-only{
        display: none !important;
        ${media.tabletMax}{
            display:block !important;
        }
    }
    .mobile-only {
        display: none !important;
        ${media.mobileMax} {
            display: block !important;
        }
    }
`;
