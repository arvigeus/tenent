import { ComponentType } from "react";
import { VscFiles } from "@react-icons/all-files/vsc/VscFiles";
import { VscSymbolClass } from "@react-icons/all-files/vsc/VscSymbolClass";
import { VscSymbolColor } from "@react-icons/all-files/vsc/VscSymbolColor";

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
