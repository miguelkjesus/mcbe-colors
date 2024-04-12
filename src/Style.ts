import { Callable } from "./Callable";
import { StyleCode } from "./StyleCode";

/**
 * Represents a style for applying formatting to Minecraft text.
 *
 * @example
 * ```ts
 * import { red } from "@mhesus/mcbe-colors";
 *
 * red("Make me red!"); // "§cMake me red!§r"
 *
 * red.bold("Red and bold."); // "§c§lRed and bold.§r"
 * ```
 */
export class Style extends Callable<(text: string) => string> {
  /**
   * The style code representing the formatting to be applied.
   */
  readonly styleCode: string;

  /**
   * Creates a new Style instance with the combined style codes of the current instance and the provided style code.
   * @param styleCode - The style code to compound with the current instance's style code.
   * @returns A new Style instance with the combined style codes.
   */
  protected createCompoundStyle(styleCode: string) {
    return new Style(this.styleCode + styleCode);
  }

  /**
   * Applies the style formatting to the provided string.
   * @param text - The string to which the formatting will be applied.
   * @returns The string with the applied formatting.
   */
  protected call(text: string) {
    return this.styleCode + text + StyleCode.reset;
  }

  /**
   * Creates a new Style instance with the specified style code.
   * @param styleCode - The style code for the new Style instance.
   */
  constructor(styleCode: string) {
    super();
    this.styleCode = styleCode;
  }

  get black() {
    return this.createCompoundStyle(StyleCode.black);
  }

  get darkBlue() {
    return this.createCompoundStyle(StyleCode.darkBlue);
  }

  get darkGreen() {
    return this.createCompoundStyle(StyleCode.darkGreen);
  }

  get darkAqua() {
    return this.createCompoundStyle(StyleCode.darkAqua);
  }

  get darkRed() {
    return this.createCompoundStyle(StyleCode.darkRed);
  }

  get darkPurple() {
    return this.createCompoundStyle(StyleCode.darkPurple);
  }

  get orange() {
    return this.createCompoundStyle(StyleCode.orange);
  }

  get gray() {
    return this.createCompoundStyle(StyleCode.gray);
  }

  get darkGray() {
    return this.createCompoundStyle(StyleCode.darkGray);
  }

  get blue() {
    return this.createCompoundStyle(StyleCode.blue);
  }

  get green() {
    return this.createCompoundStyle(StyleCode.green);
  }

  get aqua() {
    return this.createCompoundStyle(StyleCode.aqua);
  }

  get red() {
    return this.createCompoundStyle(StyleCode.red);
  }

  get lightPurple() {
    return this.createCompoundStyle(StyleCode.lightPurple);
  }

  get yellow() {
    return this.createCompoundStyle(StyleCode.yellow);
  }

  get white() {
    return this.createCompoundStyle(StyleCode.white);
  }

  get minecoin() {
    return this.createCompoundStyle(StyleCode.minecoin);
  }

  get quartz() {
    return this.createCompoundStyle(StyleCode.quartz);
  }

  get iron() {
    return this.createCompoundStyle(StyleCode.iron);
  }

  get netherite() {
    return this.createCompoundStyle(StyleCode.netherite);
  }

  get redstone() {
    return this.createCompoundStyle(StyleCode.redstone);
  }

  get copper() {
    return this.createCompoundStyle(StyleCode.copper);
  }

  get gold() {
    return this.createCompoundStyle(StyleCode.gold);
  }

  get emerald() {
    return this.createCompoundStyle(StyleCode.emerald);
  }

  get diamond() {
    return this.createCompoundStyle(StyleCode.diamond);
  }

  get lapis() {
    return this.createCompoundStyle(StyleCode.lapis);
  }

  get amethyst() {
    return this.createCompoundStyle(StyleCode.amethyst);
  }

  get obfuscated() {
    return this.createCompoundStyle(StyleCode.obfuscated);
  }

  get bold() {
    return this.createCompoundStyle(StyleCode.bold);
  }

  get italic() {
    return this.createCompoundStyle(StyleCode.italic);
  }

  get reset() {
    return this.createCompoundStyle(StyleCode.reset);
  }

  static readonly black = new this(StyleCode.black);
  static readonly darkBlue = new this(StyleCode.darkBlue);
  static readonly darkGreen = new this(StyleCode.darkGreen);
  static readonly darkAqua = new this(StyleCode.darkAqua);
  static readonly darkRed = new this(StyleCode.darkRed);
  static readonly darkPurple = new this(StyleCode.darkPurple);
  static readonly orange = new this(StyleCode.orange);
  static readonly gray = new this(StyleCode.gray);
  static readonly darkGray = new this(StyleCode.darkGray);
  static readonly blue = new this(StyleCode.blue);
  static readonly green = new this(StyleCode.green);
  static readonly aqua = new this(StyleCode.aqua);
  static readonly red = new this(StyleCode.red);
  static readonly lightPurple = new this(StyleCode.lightPurple);
  static readonly yellow = new this(StyleCode.yellow);
  static readonly white = new this(StyleCode.white);
  static readonly minecoin = new this(StyleCode.minecoin);
  static readonly quartz = new this(StyleCode.quartz);
  static readonly iron = new this(StyleCode.iron);
  static readonly netherite = new this(StyleCode.netherite);
  static readonly redstone = new this(StyleCode.redstone);
  static readonly copper = new this(StyleCode.copper);
  static readonly gold = new this(StyleCode.gold);
  static readonly emerald = new this(StyleCode.emerald);
  static readonly diamond = new this(StyleCode.diamond);
  static readonly lapis = new this(StyleCode.lapis);
  static readonly amethyst = new this(StyleCode.amethyst);

  static readonly obfuscated = new this(StyleCode.obfuscated);
  static readonly bold = new this(StyleCode.bold);
  static readonly italic = new this(StyleCode.italic);
  static readonly reset = new this(StyleCode.reset);
}

export const black = Style.black;
export const darkBlue = Style.darkBlue;
export const darkGreen = Style.darkGreen;
export const darkAqua = Style.darkAqua;
export const darkRed = Style.darkRed;
export const darkPurple = Style.darkPurple;
export const orange = Style.orange;
export const gray = Style.gray;
export const darkGray = Style.darkGray;
export const blue = Style.blue;
export const green = Style.green;
export const aqua = Style.aqua;
export const red = Style.red;
export const lightPurple = Style.lightPurple;
export const yellow = Style.yellow;
export const white = Style.white;
export const minecoin = Style.minecoin;
export const quartz = Style.quartz;
export const iron = Style.iron;
export const netherite = Style.netherite;
export const redstone = Style.redstone;
export const copper = Style.copper;
export const gold = Style.gold;
export const emerald = Style.emerald;
export const diamond = Style.diamond;
export const lapis = Style.lapis;
export const amethyst = Style.amethyst;

export const obfuscated = Style.obfuscated;
export const bold = Style.bold;
export const italic = Style.italic;
export const reset = Style.reset;
