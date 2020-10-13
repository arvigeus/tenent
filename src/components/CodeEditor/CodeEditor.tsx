import { useCallback } from "react";
import MonacoEditor, { MonacoDiffEditor } from "react-monaco-editor";

import { CodeEditorType, CodeDiffEditorType } from "./CodeEditor.types";
import { getWorkerUrl } from "./CodeEditor.helpers";

const CodeEditor = ({
  height,
  language = "typescript",
  onChange,
  editorDidMount,
  children,
}: CodeEditorType) => {
  const onInit = useCallback(() => {
    // @ts-expect-error
    window.MonacoEnvironment.getWorkerUrl = getWorkerUrl;
    if (editorDidMount) editorDidMount();
  }, [editorDidMount]);
  return (
    <MonacoEditor
      height={Number.isInteger(height) ? `${height}px}` : height}
      language={language}
      theme="vs-dark"
      value={children}
      onChange={onChange}
      editorDidMount={onInit}
    />
  );
};

export const CodeDiffEditor = ({
  height,
  language = "typescript",
  onChange,
  editorDidMount,
  left,
  right,
}: CodeDiffEditorType) => {
  const onInit = useCallback(() => {
    // @ts-expect-error
    window.MonacoEnvironment.getWorkerUrl = getWorkerUrl;
    if (editorDidMount) editorDidMount();
  }, [editorDidMount]);
  return (
    <MonacoDiffEditor
      height={Number.isInteger(height) ? `${height}px}` : height}
      language={language}
      theme="vs-dark"
      original={left}
      value={right}
      onChange={onChange}
      editorDidMount={onInit}
    />
  );
};

export default CodeEditor;
