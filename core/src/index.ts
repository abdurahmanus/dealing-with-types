export interface InterfaceFromCore {
  a: string;
}

export enum EnumFromCore {
  A = "a",
  B = "b",
}

export const ObjFromCore = {
  A: "a",
  B: "b",
  C: "c",
} as const;

export type ObjFromCore = typeof ObjFromCore[keyof typeof ObjFromCore];
