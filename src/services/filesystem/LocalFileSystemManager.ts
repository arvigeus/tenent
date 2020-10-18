import { FileSystemService, FileSystemItem } from "./FileSystem.types";
import { sanitizePath, getDirectoryAndFileName, join } from "utils/path";

/**
 * Just basic read/write/delete/move/list functionality.
 * Everything else like handling node_modules, absolute paths, .. directives should be separate logic
 * @see https://web.dev/file-system-access/
 */
class LocalFileSystemService implements FileSystemService {
  private readonly _handles = {};

  constructor(handle) {
    this._handles["/"] = handle;
  }

  private async getHandle(
    path: string,
    { type, create }: { type?: "file" | "directory"; create?: boolean } = {}
  ) {
    let handle = this._handles[sanitizePath(path)];
    if (handle) return handle;

    handle = this._handles["/"];
    const [parent, target] = getDirectoryAndFileName(path);
    const entries = parent.split("/");
    const length = entries.length - 1;
    let local = "";
    for (let i = 1; i < length; i++) {
      handle = await handle.getDirectoryHandle(entries[i], { create });
      local += `/${entries[i]}`;
      this._handles[local] = handle;
    }

    switch (type) {
      case "file":
        handle = await handle.getDirectoryHandle(target, { create });
        break;
      case "directory":
        handle = await handle.getFileHandle(target, { create });
        break;
      default:
        handle = await handle.getHandle(target);
    }

    local += `/${target}`;
    this._handles[local] = handle;
    return handle;
  }

  async readFile(path) {
    const handle = await this.getHandle(path, { type: "file" });

    const file = await handle.getFile();
    return await file.text();
  }

  async writeFile(path, contents) {
    const handle = await this.getHandle(path, { type: "file", create: true });
    const writable = await handle.createWritable();
    await writable.write(contents);
    await writable.close();
  }

  async listDirectory(path = "/"): Promise<FileSystemItem[]> {
    const handle = await this.getHandle(path, { type: "directory" });

    const results: FileSystemItem[] = [];
    for await (const entry of handle.values()) {
      this._handles[join(path, entry.name)] = entry;
      results.push({ name: entry.name, type: entry.kind });
    }

    return results;
  }

  async createDirectory(path = "/"): Promise<void> {
    await this.getHandle(path, {
      type: "directory",
      create: true,
    });
  }

  async delete(path: string) {
    const [parent, target] = getDirectoryAndFileName(path);

    if (!target) return;

    try {
      const handle = await this.getHandle(parent, { type: "directory" });
      await handle.removeEntry(target, { recursive: true });
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this._handles[join(parent, target)];
    } catch (e: unknown) {}
  }

  async move(source: string, destination: string) {
    source = sanitizePath(source);
    destination = sanitizePath(destination);
    const handle = await this.getHandle(source);
    for await (const entry of handle.values()) {
      const sourceName = join(source, entry.name);
      const destinationName = join(destination, entry.name);
      if (entry.kind === "file") {
        const contents = await this.readFile(sourceName);
        await this.writeFile(destinationName, contents);
      } else {
        await this.getHandle(destinationName, {
          type: "directory",
          create: true,
        });
        await this.move(sourceName, destinationName);
      }
      await this.delete(sourceName);
    }
  }

  async exists(path: string) {
    try {
      await this.getHandle(path);
      return true;
    } catch (e: unknown) {
      return false;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  commit() {
    // Nothing to commit here!
    return Promise.resolve(true);
  }
}

export const createLocalFileSystemManager = async (): Promise<
  FileSystemService
> => {
  const handle = await globalThis.showDirectoryPicker();
  if (handle == null) throw new Error("Unable to obtain project handle");
  return new LocalFileSystemService(handle);
};

export const isSupported = Boolean(globalThis.showDirectoryPicker);
