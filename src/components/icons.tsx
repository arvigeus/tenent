import { Box, IconProps } from "@chakra-ui/core";
import {
  DiReact,
  DiCss3,
  DiJavascript,
  DiDatabase,
  DiGitBranch,
  DiGit,
  DiHtml5,
  DiDocker,
} from "react-icons/di";

import {
  VscFileMedia,
  VscFilePdf,
  VscFileCode,
  VscFile,
  VscFolder,
  VscFolderOpened,
  VscJson,
  VscMarkdown,
  VscNewFile,
  VscNewFolder,
  VscInfo,
} from "react-icons/vsc";

import { ImFileVideo, ImFileZip } from "react-icons/im";

import {
  SiEslint,
  SiPrettier,
  SiBabel,
  SiWebpack,
  SiWebassembly,
  SiGraphql,
  SiJest,
} from "react-icons/si";

import { GrLicense } from "react-icons/gr";

export const File = (props: IconProps) => <Box {...props} as={VscFile} />;

export const FileReact = (props: IconProps) => <Box {...props} as={DiReact} />;

export const FileCss = (props: IconProps) => <Box {...props} as={DiCss3} />;

export const FileJs = (props: IconProps) => (
  <Box {...props} as={DiJavascript} />
);

export const FileJson = (props: IconProps) => <Box {...props} as={VscJson} />;

export const FileHtml = (props: IconProps) => <Box {...props} as={DiHtml5} />;

export const FileMarkdown = (props: IconProps) => (
  <Box {...props} as={VscMarkdown} />
);

export const FileGraphql = (props: IconProps) => (
  <Box {...props} as={SiGraphql} />
);

export const FileCode = (props: IconProps) => (
  <Box {...props} as={VscFileCode} />
);

export const FileWasm = (props: IconProps) => (
  <Box {...props} as={SiWebassembly} />
);

export const FileImage = (props: IconProps) => (
  <Box {...props} as={VscFileMedia} />
);

export const FileVideo = (props: IconProps) => (
  <Box {...props} as={ImFileVideo} />
);

export const FilePdf = (props: IconProps) => <Box {...props} as={VscFilePdf} />;

export const FileArchive = (props: IconProps) => (
  <Box {...props} as={ImFileZip} />
);

export const Folder = (props: IconProps) => <Box {...props} as={VscFolder} />;

export const FolderOpen = (props: IconProps) => (
  <Box {...props} as={VscFolderOpened} />
);

export const NewFile = (props: IconProps) => <Box {...props} as={VscNewFile} />;

export const NewFolder = (props: IconProps) => (
  <Box {...props} as={VscNewFolder} />
);

export const Database = (props: IconProps) => (
  <Box {...props} as={DiDatabase} />
);

export const GitBranch = (props: IconProps) => (
  <Box {...props} as={DiGitBranch} />
);

export const Git = (props: IconProps) => <Box {...props} as={DiGit} />;

export const Eslint = (props: IconProps) => <Box {...props} as={SiEslint} />;

export const Webpack = (props: IconProps) => <Box {...props} as={SiWebpack} />;

export const Jest = (props: IconProps) => <Box {...props} as={SiJest} />;

export const Prettier = (props: IconProps) => (
  <Box {...props} as={SiPrettier} />
);

export const Babel = (props: IconProps) => <Box {...props} as={SiBabel} />;

export const Docker = (props: IconProps) => <Box {...props} as={DiDocker} />;

export const License = (props: IconProps) => <Box {...props} as={GrLicense} />;

export const Readme = (props: IconProps) => <Box {...props} as={VscInfo} />;
