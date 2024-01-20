import type { $, O } from "hotscript";

export type ObjectPaths<T> = $<O.AllPaths, T> | (string & {});
