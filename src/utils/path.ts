export const sanitizePath = (path?: string) =>
  path && path !== "/" ? path.replace(/\/$/, "") : path || "/";

export const getDirectoryAndFileName = (path: string): [string, string] => {
  path = sanitizePath(path);
  if (path === "/") return ["/", ""];
  const parentPathIndex = path.lastIndexOf("/");
  return [
    path.substring(0, parentPathIndex),
    path.substring(parentPathIndex + 1),
  ];
};

export const join = (...params: string[]): string =>
  params
    .join("/")
    .replace(/(\/)\1+/g, "/") // Remove duplicates
    .replace(/\/$/, ""); // Remove trailing /

export const extension = (path: string) =>
  path.substring(path.lastIndexOf(".") + 1).toLowerCase();
