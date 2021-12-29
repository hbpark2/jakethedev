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
    text: "Profile & Career",
  },
  {
    id: 2,
    bgImage: Bubble2,
    theme: "02",
    text: "Front-end Works",
    type: "Front-end",
  },
  {
    id: 3,
    bgImage: Bubble3,
    theme: "01",
    text: "Back-end Works",
    type: "Back-end",
  },
  {
    id: 4,
    bgImage: Bubble3,
    theme: "01",
    text: "Resume",
  },
];
