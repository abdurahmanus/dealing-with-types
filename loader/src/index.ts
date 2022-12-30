import { EnumFromCore, InterfaceFromCore } from "@abdurahmanus/core";

export function init(a: EnumFromCore, b: InterfaceFromCore): boolean {
  console.log("init", { a, b });
  return true;
}
