// https://dev.to/anuraghazra/building-a-react-folder-tree-component-4a75
// https://www.storyblok.com/tp/react-dynamic-component-from-json
// No css, no hardcoded components
// what about drag and drop?
// Animations: https://github.com/drcmda/react-animated-tree/
// Click events: add native event param in callback
// No icon: use component!

import { useState } from "react";
import { Flex, Text } from "@chakra-ui/core";
import {
  TreeType,
  TreeImperativeType,
  TreeDeclarativeType,
  TreeNodeDeclarativeType,
  TreeParentNodeDeclarativeType,
} from "./Tree.types";

const Tree = (props: TreeType) => {
  const imperativeProps = props as TreeImperativeType;
  const declarativeProps = props as TreeDeclarativeType;
  return imperativeProps.data ? (
    <ImperativeTree {...imperativeProps} />
  ) : (
    <DeclarativeTree {...declarativeProps} />
  );
};

const ImperativeTree = ({ data, components }: TreeImperativeType) => null;

const DeclarativeTree = ({ children }: TreeDeclarativeType) => (
  <Flex direction="column">{children}</Flex>
);

export const Node = (
  props: TreeNodeDeclarativeType | TreeParentNodeDeclarativeType
) => {
  const Component = props.component || <Text>{props.label || props.id}</Text>;
  return null;
};

const Branch = ({
  id,
  label,
  component,
  open,
  children,
}: TreeParentNodeDeclarativeType) => {
  const [show, setShow] = useState(Boolean(open));
};

export default Tree;
