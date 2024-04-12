import * as Module from "../src";
import { Style, StyleCode } from "../src";
import { testScope } from "./common";

describe("Testing module-scoped style functions", () => {
  for (const [style, code] of Object.entries(StyleCode)) {
    test(`${style}() styles correctly`, () => {
      testScope(Style, Module, style, code);
    });
  }
});

describe("Testing Style-scoped style functions", () => {
  for (const [style, code] of Object.entries(StyleCode)) {
    test(`${style}() styles correctly`, () => {
      testScope(Style, Style, style, code);
    });
  }
});

describe("Testing style compounding", () => {
  for (const [style, code] of Object.entries(StyleCode)) {
    test(`${style}.${style}() styles correctly`, () => {
      testScope(Style, new Style(code), style, code + code);
    });
  }
});
