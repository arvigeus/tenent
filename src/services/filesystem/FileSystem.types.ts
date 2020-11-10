export enum ProviderName {
  Local = "local",
  Github = "github",
  New = "new",
}

export interface FileSystemItem {
  name: string;
  type: "file" | "directory";
}

export interface FileSystemService {
  readFile: (path: string) => Promise<string>;
  writeFile: (path: string, contents: string) => Promise<void>;
  listDirectory: (path?: string) => Promise<FileSystemItem[]>;
  createDirectory: (path: string) => Promise<void>;
  delete: (path: string) => Promise<void>;
  move: (source: string, destination: string) => Promise<void>;
  exists: (path: string) => Promise<boolean>;
  commit: () => Promise<boolean>;
}
