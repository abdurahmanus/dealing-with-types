import "@abdurahmanus/core";

declare module "@abdurahmanus/core" {
  interface InterfaceFromSomePluginMultipleDeclarationMerging {
    b: number;
  }
}

declare module "@abdurahmanus/core" {
  interface InterfaceFromSomePluginMultipleDeclarationMerging {
    c: boolean;
  }

  type UnionFromSomePluginMultipleDeclarationMerging = "foo" | "bar";
}
