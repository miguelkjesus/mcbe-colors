import { StyleCode } from "../src";
import { StyledString } from "../src/StyledString";
import { extend, unextend } from "../src/extend-string";
import { testScope, testString } from "./common";

beforeAll(() => extend());
afterAll(() => unextend());

describe("Testing string extensions", () => {
  for (const [style, code] of Object.entries(StyleCode)) {
    test(`String.${style}() styles correctly`, () => {
      testScope(StyledString, testString, style, code);
    });
  }
});

describe("Testing style compounding", () => {
  for (const [style, code] of Object.entries(StyleCode)) {
    test(`String.${style}.${style}() styles correctly`, () => {
      testScope(
        StyledString,
        new StyledString(code, testString),
        style,
        code + code
      );
    });
  }
});
