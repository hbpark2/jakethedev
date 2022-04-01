import { TabStateType } from "../../../Context/ContextStore";
import Bubble1 from "../../../Assets/bubble1.jpg";
import Bubble2 from "../../../Assets/bubble2.jpg";
import Bubble3 from "../../../Assets/bubble3.jpg";
import Bubble4 from "../../../Assets/bubble4.jpg";

export const TabArr: TabStateType[] = [
  {
    id: 1,
    bgImage: Bubble1,
    theme: "01",
    text: "Profile",
    type: "Profile",
  },
  {
    id: 2,
    bgImage: Bubble2,
    theme: "02",
    text: "Skills",
    type: "Skills",
  },
  {
    id: 3,
    bgImage: Bubble3,
    theme: "01",
    text: "Works",
    type: "Works",
  },
  // {
  //   id: 4,
  //   bgImage: Bubble4,
  //   theme: "02",
  //   text: "Resume",
  // },
];
