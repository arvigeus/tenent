import { ChangeHandler } from "react-monaco-editor";

export interface CodeEditorType {
  height?: number | string;
  language?: string;
  onChange?: ChangeHandler;
  editorDidMount?: () => void;
  children?: string;
}

export type CodeDiffEditorType = Omit<CodeEditorType, "children"> & {
  left: string;
  right: string;
};
