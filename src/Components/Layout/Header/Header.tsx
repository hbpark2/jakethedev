import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CurrentContext } from "../../../Context/ContextStore";
import { TabLine } from "../../../Home/components/Tab/styles";
import { TabArr } from "../../../Home/components/Tab/tabdata";
import { useScroll } from "../../../Hooks/Scroll";
import Noise from "../../Common/Noise";
import {
  Container,
  Logo,
  MenuBtn,
  Nav,
  LinkButton,
  NavList,
  LinkSpan,
  NavUl,
  LinkLine,
} from "./styles";

const Header = () => {
  const { menuOpen, setMenuOpen, changeCursorState, onTabClick, tabState } =
    useContext(CurrentContext);

  const [menuHide, setMenuHide] = useState(false);
  const [startY, setStartY] = useState<number>();
  const [endY, setEndY] = useState<number>();
  const location = useLocation();
  const onOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("wheel", (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setMenuHide(true);
      } else {
        setMenuHide(false);
      }
    });
  }, [startY]);

  useLayoutEffect(() => {
    document.addEventListener("touchstart", (e: TouchEvent) => {
      setStartY(e.changedTouches[0].clientY);
    });

    document.addEventListener("touchend", (e: TouchEvent) => {
      setEndY(e.changedTouches[0].clientY);
    });

    if (startY && endY) {
      if (startY > endY) {
        console.log("up");
        setMenuHide(true);
      } else {
        console.log("down");
        setMenuHide(false);
      }
    }
  }, [startY]);

  return (
    <Container menuHide={menuHide}>
      <Logo>JakeTheDev</Logo>
      <MenuBtn
        onClick={onOpenMenu}
        onMouseOver={() => changeCursorState("biggerInvert")}
        onMouseOut={() => changeCursorState("")}
        disable={location.pathname === "/resume"}
      >
        {!menuOpen ? "MENU" : "CLOSE"}
      </MenuBtn>
      <Nav menuOpen={menuOpen}>
        <h2 className="blind">navigation</h2>
        <NavUl>
          {TabArr.map((item, index) => {
            return (
              <NavList
                key={`tab${index}`}
                onClick={() => onTabClick(item)}
                onMouseOver={() => changeCursorState("bigger")}
                onMouseOut={() => changeCursorState("")}
                index={
                  index === 1
                    ? 2.5
                    : index === 3
                    ? 3.5
                    : index === 0
                    ? 1
                    : index === 6 || index === 7
                    ? 3
                    : index
                }
                menuOpen={menuOpen}
              >
                <LinkButton current={tabState.id === index + 1}>
                  0{index + 1}
                </LinkButton>
                <h3>
                  <LinkSpan>
                    {item.text}
                    <LinkLine current={tabState.id === index + 1} />
                  </LinkSpan>
                </h3>
              </NavList>
            );
          })}
        </NavUl>
        <Noise />
      </Nav>
    </Container>
  );
};

export default Header;
