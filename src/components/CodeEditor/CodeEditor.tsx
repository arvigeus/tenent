import { useCallback, useMemo, useState, useRef, useEffect } from "react";
import MonacoEditor, {
  MonacoDiffEditor,
  MonacoEditorProps,
  MonacoDiffEditorProps,
} from "react-monaco-editor";
import { Box } from "@chakra-ui/react";

import { getWorkerUrl } from "./CodeEditor.helpers";

const CodeEditor = ({
  value,
  width = "100%",
  height = "100%",
  theme = "vs-dark",
  language = "typescript",
  editorDidMount,
  ...props
}: MonacoEditorProps) => {
  const onMount = useCallback(
    (editor, monaco) => {
      // @ts-expect-error
      window.MonacoEnvironment.getWorkerUrl = getWorkerUrl;
      if (editorDidMount) editorDidMount(editor, monaco);
    },
    [editorDidMount]
  );

  const ref = useRef();

  const isDynamic = useMemo(
    () => width.toString().endsWith("%") || height.toString().endsWith("%"),
    [width, height]
  );

  const [dimensions, setDimensions] = useState({ width, height });

  useEffect(() => {
    if (!isDynamic || !ref.current) return;

    // @ts-expect-error
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    resizeObserver.observe(ref.current);
  }, [isDynamic, ref]);

  return (
    <Box
      // @ts-expect-error
      ref={ref}
      width="100%"
      height="100%"
      backgroundColor="#1e1e1e"
      overflow="hidden"
    >
      {value != null ? (
        <MonacoEditor
          theme={theme}
          language={language}
          width={dimensions.width}
          height={dimensions.height}
          editorDidMount={onMount}
          value={value}
          {...props}
        />
      ) : null}
    </Box>
  );
};

export const CodeDiffEditor = ({
  theme = "vs-dark",
  language = "typescript",
  editorDidMount,
  ...props
}: MonacoDiffEditorProps) => {
  const onMount = useCallback(
    (editor, monaco) => {
      // @ts-expect-error
      window.MonacoEnvironment.getWorkerUrl = getWorkerUrl;
      if (editorDidMount) editorDidMount(editor, monaco);
    },
    [editorDidMount]
  );
  return (
    <MonacoDiffEditor
      language={language}
      theme={theme}
      editorDidMount={onMount}
      {...props}
    />
  );
};

export default CodeEditor;
