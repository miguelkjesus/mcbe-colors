import { Style } from "./Style";
import { StyleCode } from "./StyleCode";

declare global {
  interface String {
    black: string;
    darkBlue: string;
    darkGreen: string;
    darkAqua: string;
    darkRed: string;
    darkPurple: string;
    gold: string;
    gray: string;
    darkGray: string;
    blue: string;
    green: string;
    aqua: string;
    red: string;
    lightPurple: string;
    yellow: string;
    white: string;
    minecoinGold: string;
    obfuscated: string;
    // @ts-ignore
    bold: string;
    italic: string;
  }
}

let styleNames = Object.keys(StyleCode);

export function extend() {
  Object.defineProperties(
    String.prototype,
    Object.fromEntries(
      styleNames.map((style) => [
        style,
        {
          get(this: string): string {
            return (Style[style] as unknown as Style)(this);
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
