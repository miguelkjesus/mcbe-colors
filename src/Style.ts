import { StyleCode } from "./StyleCode";

export interface Style {
  (text: string): string;
}

export class Style {
  private styleCode: string;

  get black() {
    return new Style(this.styleCode + StyleCode.black);
  }

  get darkBlue() {
    return new Style(this.styleCode + StyleCode.darkBlue);
  }

  get darkGreen() {
    return new Style(this.styleCode + StyleCode.darkGreen);
  }

  get darkAqua() {
    return new Style(this.styleCode + StyleCode.darkAqua);
  }

  get darkRed() {
    return new Style(this.styleCode + StyleCode.darkRed);
  }

  get darkPurple() {
    return new Style(this.styleCode + StyleCode.darkPurple);
  }

  get gold() {
    return new Style(this.styleCode + StyleCode.gold);
  }

  get gray() {
    return new Style(this.styleCode + StyleCode.gray);
  }

  get darkGray() {
    return new Style(this.styleCode + StyleCode.darkGray);
  }

  get blue() {
    return new Style(this.styleCode + StyleCode.blue);
  }

  get green() {
    return new Style(this.styleCode + StyleCode.green);
  }

  get aqua() {
    return new Style(this.styleCode + StyleCode.aqua);
  }

  get red() {
    return new Style(this.styleCode + StyleCode.red);
  }

  get lightPurple() {
    return new Style(this.styleCode + StyleCode.lightPurple);
  }

  get yellow() {
    return new Style(this.styleCode + StyleCode.yellow);
  }

  get white() {
    return new Style(this.styleCode + StyleCode.white);
  }

  get minecoinGold() {
    return new Style(this.styleCode + StyleCode.minecoinGold);
  }

  get obfuscated() {
    return new Style(this.styleCode + StyleCode.obfuscated);
  }

  get bold() {
    return new Style(this.styleCode + StyleCode.bold);
  }

  get italic() {
    return new Style(this.styleCode + StyleCode.italic);
  }

  constructor(styleCode: string) {
    this.styleCode = styleCode;

    let apply = <Style>function (text: string): string {
      return this.styleCode + text + StyleCode.reset;
    };

    apply.bind(this);
    Object.assign(apply, this);
    Object.setPrototypeOf(apply, Style.prototype);
    return apply;
  }

  static black = new Style(StyleCode.black);
  static darkBlue = new Style(StyleCode.darkBlue);
  static darkGreen = new Style(StyleCode.darkGreen);
  static darkAqua = new Style(StyleCode.darkAqua);
  static darkRed = new Style(StyleCode.darkRed);
  static darkPurple = new Style(StyleCode.darkPurple);
  static gold = new Style(StyleCode.gold);
  static gray = new Style(StyleCode.gray);
  static darkGray = new Style(StyleCode.darkGray);
  static blue = new Style(StyleCode.blue);
  static green = new Style(StyleCode.green);
  static aqua = new Style(StyleCode.aqua);
  static red = new Style(StyleCode.red);
  static lightPurple = new Style(StyleCode.lightPurple);
  static yellow = new Style(StyleCode.yellow);
  static white = new Style(StyleCode.white);
  static minecoinGold = new Style(StyleCode.minecoinGold);
  static obfuscated = new Style(StyleCode.obfuscated);
  static bold = new Style(StyleCode.bold);
  static italic = new Style(StyleCode.italic);
}

export const black = Style.black;
export const darkBlue = Style.darkBlue;
export const darkGreen = Style.darkGreen;
export const darkAqua = Style.darkAqua;
export const darkRed = Style.darkRed;
export const darkPurple = Style.darkPurple;
export const gold = Style.gold;
export const gray = Style.gray;
export const darkGray = Style.darkGray;
export const blue = Style.blue;
export const green = Style.green;
export const aqua = Style.aqua;
export const red = Style.red;
export const lightPurple = Style.lightPurple;
export const yellow = Style.yellow;
export const white = Style.white;
export const minecoinGold = Style.minecoinGold;
export const obfuscated = Style.obfuscated;
export const bold = Style.bold;
export const italic = Style.italic;
