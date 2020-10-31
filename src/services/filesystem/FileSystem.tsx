import { atom, useRecoilCallback } from "recoil";
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
