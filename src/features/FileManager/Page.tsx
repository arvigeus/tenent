import { Suspense } from "react";
import EntriesList from "./components/EntiresList";
import CodeEditor from "./components/CodeEditor";
import ThreeViewPanel from "layouts/ThreeViewPanel";

export default function FileManager() {
  return (
    <ThreeViewPanel sidePanel={<EntriesList />}>
      <Suspense fallback="Loading...">
        <CodeEditor />
      </Suspense>
    </ThreeViewPanel>
  );
}
