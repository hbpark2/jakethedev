import { createContext, useState } from "react";
import Bubble1 from "../Assets/bubble1.jpg";
import TheGN1 from "../Assets/thegn2.png";

type StoreProviderProp = {
  children: React.ReactNode;
};

type CursorState =
  | "biggerInvert"
  | "bigger"
  | "biggerLink"
  | "image"
  | "jake"
  | "";

export type TabStateType = {
  id: number;
  theme: "01" | "02" | "03" | "04";
  bgImage: string;
  text?: string;
  type?: string;
};

type ValueType = {
  menuOpen: boolean;
  setMenuOpen: (T: boolean) => void;
  invert: boolean;
  setInvert: (T: boolean) => void;
  currentPosition: CursorState;
  tabState: TabStateType;
  setTabState: (T: TabStateType) => void;
  setCurrentPosition: (T: CursorState) => void;
  changeCursorState: (T: CursorState) => void;
  onTabClick: (T: TabStateType) => void;
};

export const CurrentContext = createContext<ValueType>({
  menuOpen: false,
  setMenuOpen: () => {},
  invert: false,
  setInvert: () => {},
  currentPosition: "",
  tabState: { id: 1, theme: "01", bgImage: Bubble1, type: "" },
  setTabState: () => {},
  setCurrentPosition: () => {},
  changeCursorState: () => {},
  onTabClick: () => {},
});

export const StoreProvider: React.FC<StoreProviderProp> = ({ children }) => {
  const [tabState, setTabState] = useState<TabStateType>({
    id: 1,
    theme: "01",
    bgImage: Bubble1,
    text: "Profile",
    type: "",
  });

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [currentPosition, setCurrentPosition] = useState<CursorState>("");
  const [invert, setInvert] = useState<boolean>(false);

  const changeCursorState = (state: string) => {
    if (window.innerWidth > 639) {
      switch (state) {
        case "biggerInvert":
          setCurrentPosition("bigger");
          setInvert(true);
          break;

        case "bigger":
          setCurrentPosition("bigger");
          break;

        case "image":
          setCurrentPosition("image");
          break;
        case "jake":
          setCurrentPosition("jake");
          break;
        case "link":
          setCurrentPosition("bigger");
          setCurrentPosition("biggerLink");
          break;

        default:
          setCurrentPosition("");
          setInvert(false);
          break;
      }
    } else {
      return null;
    }
  };

  const onTabClick = (theme: TabStateType) => {
    setTabState({
      id: theme.id,
      theme: theme.theme,
      bgImage: theme.bgImage,
      text: theme.text,
      type: theme.type,
    });
  };

  const value: ValueType = {
    menuOpen,
    setMenuOpen,
    invert,
    setInvert,
    currentPosition,
    tabState,
    setTabState,
    setCurrentPosition,
    changeCursorState,
    onTabClick,
  };

  return (
    <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>
  );
};
