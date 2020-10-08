import { ReactElement, ReactNode } from "react";

interface TreeNodeEvents {
  // TODO: Make native events, delete and rename are key presses, etc; move should stay
  // Actually do we need anything other than move since we use components? Yes, we are dealing with CONTAINERS
  // TODO: Style containers
  onClick?: (id: string) => void;
  onDelete?: (id: string) => void;
  onRename?: (id: string) => void;
  onMove?: (id: string, parentId: string) => void;
  onHover?: (id: string) => void;
  onBlur?: (id: string) => void;
}

interface TreeNodeType extends TreeNodeEvents {
  id: string;
  label?: string;
}

interface TreeParentNodeType {
  isOpen?: boolean;
  onToggle: (item: string[], isOpen) => void;
}

interface ComponentDefinitionType {
  [key: string]: ReactNode;
}

interface ReactJsonComponentType {
  _uid: string;
  componentName: string & keyof ComponentDefinitionType;
  properties: { [key: string]: never };
}

interface TreeNodeImperativeType extends TreeNodeType {
  component?: ReactJsonComponentType;
}

interface TreeParentNodeImperativeType
  extends TreeNodeImperativeType,
    TreeParentNodeType {
  children: TreeParentNodeImperativeType[] | TreeNodeImperativeType[];
}

export interface TreeNodeDeclarativeType extends TreeNodeType {
  component?: ReactNode;
}

export interface TreeParentNodeDeclarativeType
  extends TreeNodeDeclarativeType,
    TreeParentNodeType {
  open?: false;
  children:
    | ReactElement<TreeParentNodeDeclarativeType>[]
    | ReactElement<TreeNodeDeclarativeType>[]
    | ReactElement<TreeParentNodeDeclarativeType>
    | ReactElement<TreeNodeDeclarativeType>;
}

interface TreeOptionsType {
  childrenOffset?: number;
}

export interface TreeImperativeType extends TreeOptionsType {
  data: Pick<TreeParentNodeImperativeType, "children">;
  components?: ComponentDefinitionType;
}

export interface TreeDeclarativeType extends TreeOptionsType {
  children: Pick<TreeParentNodeDeclarativeType, "children">;
}

export type TreeType = TreeImperativeType | TreeDeclarativeType;
