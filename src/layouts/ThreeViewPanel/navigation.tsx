import { ComponentType } from "react";
import { VscFiles, VscSymbolClass, VscSymbolColor } from "react-icons/vsc";

export interface NavigationItem {
  name: string;
  path: string;
  icon: ComponentType;
}

const navigation: NavigationItem[] = [
  {
    name: "Entities",
    path: "/project/entities",
    icon: VscSymbolClass,
  },
  {
    name: "Designer",
    path: "/project/designer",
    icon: VscSymbolColor,
  },
  {
    name: "Files",
    path: "/project/files",
    icon: VscFiles,
  },
];

export default navigation;
