import { Style } from "./Style.js";
import { StyleCode } from "./StyleCode.js";

/**
 * Represents a string with known content but pending formatting.
 */
export class StyledString extends Style {
  /**
   * The text content of the styled string.
   */
  readonly text: string;

  /**
   * Creates a new StyledString instance with the combined style codes of the current instance and the provided style code.
   * @param styleCode - The style code to compound with the current instance's style code.
   * @returns A new Style instance with the combined style codes.
   */
  protected createCompoundStyle(styleCode: string) {
    return new StyledString(this.styleCode + styleCode, this.text);
  }

  /**
   * Applies the style to the text content of the StyledString.
   * @returns The styled text.
   */
  protected call() {
    return this.insertStyleCode(this.text) + StyleCode.reset;
  }

  /**
   * Creates a new StyledString instance with the specified style code and text content.
   * @param styleCode - The style code for the styled string.
   * @param text - The text content of the styled string.
   */
  constructor(styleCode: string, text: string) {
    super(styleCode);
    this.text = text;
  }
}
