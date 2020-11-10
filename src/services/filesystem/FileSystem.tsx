import {
  atom,
  selectorFamily,
  useRecoilValue,
  useRecoilCallback,
  useRecoilState,
} from "recoil";
import { FileSystemService, ProviderName } from "./FileSystem.types";
import {
  createLocalFileSystemProvider,
  createGithubFileSystemProvider,
} from "./providers";
import { GithubOptions } from "./providers/GithubFileSystem";

export const supportsLocal = true;

export const fileSystemState = atom<FileSystemService | null>({
  key: "fileSystem",
  default: null,
});

export type LoadFileSystemArgs =
  | [ProviderName.Local]
  | [ProviderName.Github, GithubOptions]
  | [ProviderName.New];

export const useLoadFileSystemCallback = (
  callback: (error?: unknown) => void,
  deps: unknown[]
) =>
  useRecoilCallback<LoadFileSystemArgs, Promise<void>>(
    ({ set }) => async (type, options?) => {
      try {
        switch (type) {
          case ProviderName.Local:
            if (supportsLocal) {
              const localFs = await createLocalFileSystemProvider();
              await set(fileSystemState, localFs);
              callback();
            } else callback(new Error("Not supported"));
            break;
          case ProviderName.Github:
            if (options) {
              const githubFs = await createGithubFileSystemProvider(options);
              await set(fileSystemState, githubFs);
            } else callback(new Error("Missing options for GitHub"));
            break;
          default:
            callback(new Error("Not implemented"));
            break;
        }
      } catch (e: unknown) {
        callback(e);
      }
    },
    deps
  );

export const useFileSystem = () => useRecoilValue(fileSystemState);

const readDirectoryState = selectorFamily({
  key: "readDirectory",
  get: (path: string) => async ({ get }) => {
    const fs = get(fileSystemState);
    if (fs == null) return null;
    return await fs.listDirectory(path);
  },
});

export const useReadDirectory = (path: string) => {
  const entries = useRecoilValue(readDirectoryState(path));
  return entries;
};

const currentOpenFileNameState = atom<string | null>({
  key: "currentOpenFileName",
  default: null,
});

const disabled = /(\.jpg$)/;
const readFileState = selectorFamily({
  key: "readFile",
  get: (path: string | null) => async ({ get }) => {
    if (path === null) return null;
    const fs = get(fileSystemState);
    if (fs == null) return null;
    if (disabled.test(path)) return null;
    return await fs.readFile(path);
  },
});

export const useOpenFile = () => useRecoilState(currentOpenFileNameState);

export const useReadFile = (path: string | null) =>
  useRecoilValue(readFileState(path));
