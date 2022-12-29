import "@abdurahmanus/core";

declare module "@abdurahmanus/core" {
  interface InterfaceFromSomePlugin2 {
    b: number;
  }

  enum Enum1FromSomePlugin3 {
    A = "a",
    B = "b",
  }

  const enum Enum2FromSomePlugin3 {
    A = "a",
    B = "b",
    C = "c",
  }
}
