import { StyleCode } from "./StyleCode";

export interface StringExtensionStyle {
  (): string;
}

export class StringExtensionStyle {
  private styleCode: string;
  private text: string;

  get black() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.black,
      this.text
    );
  }

  get darkBlue() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.darkBlue,
      this.text
    );
  }

  get darkGreen() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.darkGreen,
      this.text
    );
  }

  get darkAqua() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.darkAqua,
      this.text
    );
  }

  get darkRed() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.darkRed,
      this.text
    );
  }

  get darkPurple() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.darkPurple,
      this.text
    );
  }

  get gold() {
    return new StringExtensionStyle(this.styleCode + StyleCode.gold, this.text);
  }

  get gray() {
    return new StringExtensionStyle(this.styleCode + StyleCode.gray, this.text);
  }

  get darkGray() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.darkGray,
      this.text
    );
  }

  get blue() {
    return new StringExtensionStyle(this.styleCode + StyleCode.blue, this.text);
  }

  get green() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.green,
      this.text
    );
  }

  get aqua() {
    return new StringExtensionStyle(this.styleCode + StyleCode.aqua, this.text);
  }

  get red() {
    return new StringExtensionStyle(this.styleCode + StyleCode.red, this.text);
  }

  get lightPurple() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.lightPurple,
      this.text
    );
  }

  get yellow() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.yellow,
      this.text
    );
  }

  get white() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.white,
      this.text
    );
  }

  get minecoinGold() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.minecoinGold,
      this.text
    );
  }

  get obfuscated() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.obfuscated,
      this.text
    );
  }

  get bold() {
    return new StringExtensionStyle(this.styleCode + StyleCode.bold, this.text);
  }

  get italic() {
    return new StringExtensionStyle(
      this.styleCode + StyleCode.italic,
      this.text
    );
  }

  constructor(styleCode: string, text: string) {
    this.styleCode = styleCode;
    this.text = text;

    let apply = <StringExtensionStyle>function (): string {
      return styleCode + text + StyleCode.reset;
    };

    apply.bind(this);
    Object.assign(apply, this);
    Object.setPrototypeOf(apply, StringExtensionStyle.prototype);
    return apply;
  }
}
