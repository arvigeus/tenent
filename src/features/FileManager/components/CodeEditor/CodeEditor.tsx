import { Suspense } from "react";
import { getLanguage } from "../EntiresList/utils";
import MonacoEditor from "components/CodeEditor";
import { useOpenFile, useReadFile } from "services/filesystem";

export default function CodeEditor() {
  const [currentFileName] = useOpenFile();
  const content = useReadFile(currentFileName);

  return (
    <Suspense fallback="Loading...">
      <MonacoEditor value={content} language={getLanguage(currentFileName)} />
    </Suspense>
  );
}
