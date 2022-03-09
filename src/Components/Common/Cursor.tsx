import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Drawing from "../../Assets/drawing-19.jpg";
import Profile from "../../Assets/portrait-3.png";
import JakeImg from "../../Assets/jake.png";
import { CursorImage, JakeImage } from "../../Styles/animation";
import { useLocation } from "react-router-dom";

const CursorTail = styled.div<{
  currentPosition?: string;
}>`
  pointer-events: none;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 1;
  display: flex;
  color: ${({ theme: { accentColor } }) => accentColor};
  font-family: ${({ theme: { accentFont } }) => accentFont};
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  /* border: 1px solid #bababa; */
  border: 1px solid ${({ theme: { accentColor } }) => accentColor};
  transform: translate(-50%, -50%);
  transform-origin: 50% 50%;
  transition: transform 0.5s ease-in-out;

  z-index: 999;
  ${({ currentPosition }) =>
    (currentPosition === "bigger" &&
      css`
        transform: scale(1.8) translate(-30%, -30%);
      `) ||
    (currentPosition === "image" &&
      css`
        border: none;
      `) ||
    (currentPosition === "jake" &&
      css`
        border: none;
        transform: scale(2) translate(-30%, -30%);
      `)}

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    display: none;
  }
`;

const CursorDot = styled.i`
  pointer-events: none;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out transform 0.3s ease-in-out -webkit-transform
    0.3s ease-in-out;
  width: 8px;
  height: 8px;
  background-color: #fff;
  z-index: 999;
  mix-blend-mode: difference;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    display: none;
  }
`;

const Image = styled.img`
  width: 300px;
  width: 250px;
  width: 150px;
  opacity: 0.5;
  animation: ${CursorImage} 1s;
  animation-fill-mode: both;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
`;

const CursorTailInner = styled.div`
  position: relative;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
  }
`;

const Jake = styled.img`
  width: 300px;
  opacity: 0.7;
  animation: ${JakeImage} 1s;
  animation-fill-mode: both;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
`;

type PostionTypes = {
  x: number;
  y: number;
};

interface CursorProps {
  currentPosition: string;
  loading?: boolean;
}
const Cursor: React.FC<CursorProps> = ({ currentPosition, loading }) => {
  const location = useLocation();
  const [position, setPosition] = useState<PostionTypes>({ x: -80, y: -80 });
  let mouseX = -80;
  let mouseY = -80;

  const addEventListeners = (): void => {
    document?.addEventListener("mousemove", onMouseMove);

    tail();
  };

  const removeEventListeners = (): void => {
    document?.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e: MouseEvent): void => {
    setPosition({ x: e.clientX, y: e.clientY });
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const tail = () => {
    const cursorTail = document.querySelector(".cursor-tail")! as HTMLElement;
    if (cursorTail) {
      const tail_x = parseInt(cursorTail.style?.left.replace("px", "")) || 0;
      const tail_y = parseInt(cursorTail.style?.top.replace("px", "")) || 0;
      cursorTail.style.top = `${Math.round(tail_y + (mouseY - tail_y) / 8)}px`;
      cursorTail.style.left = `${Math.round(tail_x + (mouseX - tail_x) / 8)}px`;
      requestAnimationFrame(tail);
    }
  };

  useEffect(() => {
    addEventListeners();

    return () => removeEventListeners();
  }, [location]);

  return (
    <>
      <CursorTail
        className="cursor-tail"
        role="cursor"
        currentPosition={currentPosition}
      >
        {(currentPosition === "biggerLink" && "go Detail") ||
          (currentPosition === "image" && (
            <CursorTailInner>
              <Image src={Profile} alt="profileimage" />
              {/* <span>Click</span> */}
            </CursorTailInner>
          )) ||
          (currentPosition === "jake" && (
            <Jake src={JakeImg} alt="profileimage" />
          ))}
      </CursorTail>
      <CursorDot
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
