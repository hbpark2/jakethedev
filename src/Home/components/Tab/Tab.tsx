import { useContext, useState } from "react";
import { TabArr } from "./tabdata";
import { CurrentContext } from "../../../Context/ContextStore";
import { useScroll } from "../../../Hooks/Scroll";
import {
  TabButton,
  TabContainer,
  TabLine,
  TabLink,
  TabList,
  TabSpan,
  TabSpanTop,
} from "./styles";

const Tab = () => {
  const { changeCursorState, onTabClick, tabState } =
    useContext(CurrentContext);

  const { scrollY } = useScroll();
  // console.log(scrollY);
  return (
    <TabContainer scrl={scrollY}>
      {TabArr.map((item, index) => {
        return item.text !== "Resume" ? (
          <TabList
            key={`tab${index}`}
            onMouseOver={() => changeCursorState("bigger")}
            onMouseOut={() => changeCursorState("")}
            onClick={() => tabState.id !== index + 1 && onTabClick(item)}
          >
            <TabButton current={tabState.id === index + 1}>
              0{index + 1}
            </TabButton>
            <TabSpan>
              {/* {item.type ? <TabSpanTop>{item.type}</TabSpanTop> : item.text} */}
              {item.text}
              <TabLine current={tabState.id === index + 1} />
            </TabSpan>
          </TabList>
        ) : (
          <TabLink
            key={`tab${index}`}
            to="/resume"
            onMouseOver={() => changeCursorState("bigger")}
            onMouseOut={() => changeCursorState("")}
            // onClick={() => tabState.id !== index + 1 && onTabClick(item)}
          >
            <TabButton current={tabState.id === index + 1}>
              0{index + 1}
            </TabButton>
            <TabSpan>
              {item.text}
              <TabLine current={tabState.id === index + 1} />
            </TabSpan>
          </TabLink>
        );
      })}
    </TabContainer>
  );
};

export default Tab;
