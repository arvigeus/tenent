import { useCallback, useState, Suspense } from "react";
import { Collapse, Flex, Button, Text, Box } from "@chakra-ui/react";
import { fileProps, shouldIgnore, getFileIcon } from "./utils";
import { useReadDirectory, useOpenFile } from "services/filesystem";
import { join } from "utils/path";
import { Folder, FolderOpen } from "components/icons";

export default function EntriesList() {
  return (
    <Suspense fallback="Loading...">
      <DirectoryList path="/" />
    </Suspense>
  );
}

const DirectoryList = ({ path }) => {
  const entries = useReadDirectory(path);
  if (entries == null) return <Text>No entries</Text>;
  const sorted = [...entries].sort((a, b) => {
    if (a.type === "directory" && b.type === "file") return -1;
    if (a.type === "file" && b.type === "directory") return 1;
    return a.name.localeCompare(b.name);
  });
  return (
    <Box p="5px">
      {sorted.map(({ name, type }) => {
        const key = join(path, name);
        if (shouldIgnore(key, name)) return null;
        return type === "directory" ? (
          <Directory key={key} parent={path} name={name} fullName={key} />
        ) : (
          <File key={key} parent={path} name={name} fullName={key} />
        );
      })}
    </Box>
  );
};

const openDirectories = new Set<string>();
const Directory = ({ parent, name, fullName }) => {
  const [isOpen, setOpen] = useState(openDirectories.has(fullName));
  const setOpenHandler = useCallback(() => {
    if (!isOpen) openDirectories.add(fullName);
    else openDirectories.delete(fullName);
    setOpen(!isOpen);
  }, [fullName, setOpen, isOpen]);

  const Icon = isOpen ? FolderOpen : Folder;

  return (
    <>
      <Flex direction="row">
        <Button onClick={setOpenHandler} aria-label="directory" {...fileProps}>
          <Icon width="16px" height="16px" mr="5px" />
          {name}
        </Button>
      </Flex>

      <Suspense fallback={null}>
        <Box ml={1}>
          <Collapse in={isOpen}>
            {isOpen && <DirectoryList path={fullName} />}
          </Collapse>
        </Box>
      </Suspense>
    </>
  );
};

const File = ({ parent, name, fullName }) => {
  const [, setOpenFile] = useOpenFile();
  const onFileSelected = useCallback(() => {
    setOpenFile(fullName);
  }, [fullName, setOpenFile]);

  const Icon = getFileIcon(name);

  return (
    <Flex direction="row">
      <Button onClick={onFileSelected} aria-label="file" {...fileProps}>
        <Icon width="16px" height="16px" mr="5px" />
        {name}
      </Button>
    </Flex>
  );
};
