import { Style, StyleCode } from "../src";

export const testString = "test";

export function testScope<T extends Function>(
  styleClass: T,
  scope: any,
  style: string,
  expectedCode: string
) {
  expect(scope).toHaveProperty(style);
  expect(scope[style]).toBeInstanceOf(styleClass);

  let styleFunc = scope[style] as Style;
  expect(styleFunc.styleCode).toBe(expectedCode);
  expect(scope[style](testString)).toBe(
    expectedCode + testString + StyleCode.reset
  );
}
