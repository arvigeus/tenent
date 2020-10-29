import CodeEditor from "components/CodeEditor";
import ThreeViewPanel from "views/project/components/ThreeViewPanel";

export default function Files() {
  return (
    <ThreeViewPanel sidePanel="files">
      <CodeEditor />
    </ThreeViewPanel>
  );
}
