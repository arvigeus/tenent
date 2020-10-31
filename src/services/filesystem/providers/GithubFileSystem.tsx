import { FileSystemService } from "../FileSystem.types";

export interface GithubOptions {}

export const createGithubFileSystemProvider = async (
  _options: GithubOptions
): Promise<FileSystemService> => {
  return Promise.reject(new Error("Not implemented"));
};
