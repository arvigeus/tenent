import { Icon, IconProps } from "@chakra-ui/react";
import { DiReact } from "@react-icons/all-files/di/DiReact";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { DiJavascript } from "@react-icons/all-files/di/DiJavascript";
import { DiDatabase } from "@react-icons/all-files/di/DiDatabase";
import { DiGitBranch } from "@react-icons/all-files/di/DiGitBranch";
import { DiGit } from "@react-icons/all-files/di/DiGit";
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5";
import { DiDocker } from "@react-icons/all-files/di/DiDocker";

import { VscFileMedia } from "@react-icons/all-files/vsc/VscFileMedia";
import { VscFilePdf } from "@react-icons/all-files/vsc/VscFilePdf";
import { VscFileCode } from "@react-icons/all-files/vsc/VscFileCode";
import { VscFile } from "@react-icons/all-files/vsc/VscFile";
import { VscFolder } from "@react-icons/all-files/vsc/VscFolder";
import { VscFolderOpened } from "@react-icons/all-files/vsc/VscFolderOpened";
import { VscJson } from "@react-icons/all-files/vsc/VscJson";
import { VscMarkdown } from "@react-icons/all-files/vsc/VscMarkdown";
import { VscNewFile } from "@react-icons/all-files/vsc/VscNewFile";
import { VscNewFolder } from "@react-icons/all-files/vsc/VscNewFolder";
import { VscInfo } from "@react-icons/all-files/vsc/VscInfo";
import { VscGithubAlt } from "@react-icons/all-files/vsc/VscGithubAlt";

import { ImFileVideo } from "@react-icons/all-files/im/ImFileVideo";
import { ImFileZip } from "@react-icons/all-files/im/ImFileZip";

import { SiEslint } from "@react-icons/all-files/si/SiEslint";
import { SiPrettier } from "@react-icons/all-files/si/SiPrettier";
import { SiBabel } from "@react-icons/all-files/si/SiBabel";
import { SiWebpack } from "@react-icons/all-files/si/SiWebpack";
import { SiWebassembly } from "@react-icons/all-files/si/SiWebassembly";
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql";
import { SiJest } from "@react-icons/all-files/si/SiJest";

import { GrLicense } from "@react-icons/all-files/gr/GrLicense";

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
