import { StringExtensionStyle } from "./StringExtensionStyle";
import { StyleCode } from "./StyleCode";

let styleNames = Object.keys(StyleCode);

export function extend() {
  Object.defineProperties(
    String.prototype,
    Object.fromEntries(
      styleNames.map((style) => [
        style,
        {
          get(this: string): StringExtensionStyle {
            return new StringExtensionStyle(StyleCode[style], this);
          },
        },
      ])
    )
  );
}

export function unextend() {
  Object.defineProperties(
    String.prototype,
    Object.fromEntries(styleNames.map((style) => [style, undefined]))
  );
}
