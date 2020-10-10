import { ReactElement, ComponentType } from "react";

export interface NodeDataProps<T> {
  id: string;
  properties?: T;
  nodes?: NodeDataProps<T>[];
}

interface TreeNodeProps<T> extends NodeDataProps<T> {
  level: number;
  parentId: string | null;
  component: ComponentType<NodeProps<T>>;
}

export interface NodeProps<T> extends Omit<NodeDataProps<T>, "children"> {
  level: number;
  parentId: string | null;
  children?:
    | ReactElement<TreeNodeProps<T>>
    | ReactElement<TreeNodeProps<T>>[]
    | null;
}

interface TreeViewProps<T> {
  nodes: NodeDataProps<T>[];
  component: ComponentType<NodeProps<T>>;
}

export default function TreeView<T>({ nodes, component }: TreeViewProps<T>) {
  return (
    <>
      {nodes.map(({ id, ...props }) => (
        <TreeNode
          {...props}
          key={id}
          id={id}
          level={0}
          parentId={null}
          component={component}
        />
      ))}
    </>
  );
}

function TreeNode<T>({
  component: Component,
  id,
  level,
  nodes,
  ...props
}: TreeNodeProps<T>) {
  return (
    <Component id={id} level={level} {...props}>
      {nodes &&
        nodes.map(({ id: childId, ...childProps }) => (
          <TreeNode
            {...childProps}
            component={Component}
            key={childId}
            id={childId}
            parentId={id}
            level={level + 1}
          />
        ))}
    </Component>
  );
}
