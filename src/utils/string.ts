import { escapeRegExp } from "./regexp";

export const trimStart = (string: string, text: string) =>
  string.replace(new RegExp(`^${escapeRegExp(text)}`), "");

export const trimEnd = (string: string, text: string) =>
  string.replace(new RegExp(`${escapeRegExp(text)}$`), "");

export const trim = (string: string, text: string) =>
  trimStart(trimEnd(string, text), text);
