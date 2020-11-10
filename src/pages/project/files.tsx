import dynamic from "next/dynamic";
import { useRequireFs } from "hooks";

const FileManager = dynamic(() => import("features/FileManager/Page"), {
  ssr: false,
});

export default function ProjectFiles() {
  const page = useRequireFs(<FileManager />, { redirectTo: "/project/" });

  return page;
}
