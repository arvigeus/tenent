import { ButtonProps } from "@chakra-ui/react";
import { extension } from "utils/path";
import * as icons from "components/icons";

export const fileProps: Partial<ButtonProps> = {
  colorScheme: "transparent",
  size: "xs",
  color: "gray.300",
  fontWeight: "normal",
};

const ignoredEntries = ["node_modules", ".git"];

export const shouldIgnore = (fullName: string, name: string) =>
  ignoredEntries.includes(name) || ignoredEntries.includes(fullName);

export const getFileIcon = (name: string) => {
  const ext = extension(name);
  switch (ext) {
    case "json":
      return icons.FileJson;
    case "js":
    case "ts":
      return icons.FileCode;
    case "jsx":
    case "tsx":
      return icons.FileReact;
    case "md":
      return icons.FileMarkdown;
    default:
      return icons.File;
  }
};

// https://github.com/Microsoft/monaco-languages
export const getLanguage = (name: string | null) => {
  if (!name) return "text";
  const ext = extension(name);
  switch (ext) {
    case "json":
      return "json";
    case "js":
    case "jsx":
      return "javascript";
    case "ts":
    case "tsx":
      return "typescript";
    case "md":
      return "markdown";
    default:
      return ext;
  }
};
