import { Icon, IconProps } from "@chakra-ui/react";
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
  VscGithubAlt,
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

export const File = (props: IconProps) => <Icon {...props} as={VscFile} />;

export const FileReact = (props: IconProps) => <Icon {...props} as={DiReact} />;

export const FileCss = (props: IconProps) => <Icon {...props} as={DiCss3} />;

export const FileJs = (props: IconProps) => (
  <Icon {...props} as={DiJavascript} />
);

export const FileJson = (props: IconProps) => <Icon {...props} as={VscJson} />;

export const FileHtml = (props: IconProps) => <Icon {...props} as={DiHtml5} />;

export const FileMarkdown = (props: IconProps) => (
  <Icon {...props} as={VscMarkdown} />
);

export const FileGraphql = (props: IconProps) => (
  <Icon {...props} as={SiGraphql} />
);

export const FileCode = (props: IconProps) => (
  <Icon {...props} as={VscFileCode} />
);

export const FileWasm = (props: IconProps) => (
  <Icon {...props} as={SiWebassembly} />
);

export const FileImage = (props: IconProps) => (
  <Icon {...props} as={VscFileMedia} />
);

export const FileVideo = (props: IconProps) => (
  <Icon {...props} as={ImFileVideo} />
);

export const FilePdf = (props: IconProps) => (
  <Icon {...props} as={VscFilePdf} />
);

export const FileArchive = (props: IconProps) => (
  <Icon {...props} as={ImFileZip} />
);

export const Folder = (props: IconProps) => <Icon {...props} as={VscFolder} />;

export const FolderOpen = (props: IconProps) => (
  <Icon {...props} as={VscFolderOpened} />
);

export const NewFile = (props: IconProps) => (
  <Icon {...props} as={VscNewFile} />
);

export const NewFolder = (props: IconProps) => (
  <Icon {...props} as={VscNewFolder} />
);

export const Database = (props: IconProps) => (
  <Icon {...props} as={DiDatabase} />
);

export const GitBranch = (props: IconProps) => (
  <Icon {...props} as={DiGitBranch} />
);

export const Git = (props: IconProps) => <Icon {...props} as={DiGit} />;

export const Eslint = (props: IconProps) => <Icon {...props} as={SiEslint} />;

export const Webpack = (props: IconProps) => <Icon {...props} as={SiWebpack} />;

export const Jest = (props: IconProps) => <Icon {...props} as={SiJest} />;

export const Prettier = (props: IconProps) => (
  <Icon {...props} as={SiPrettier} />
);

export const Github = (props: IconProps) => (
  <Icon {...props} as={VscGithubAlt} />
);

export const Babel = (props: IconProps) => <Icon {...props} as={SiBabel} />;

export const Docker = (props: IconProps) => <Icon {...props} as={DiDocker} />;

export const License = (props: IconProps) => <Icon {...props} as={GrLicense} />;

export const Readme = (props: IconProps) => <Icon {...props} as={VscInfo} />;
