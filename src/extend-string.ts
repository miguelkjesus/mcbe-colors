import { StyledString } from "./StyledString.js";
import { StyleCode } from "./StyleCode.js";

/**
 * Adds the styling methods to the String prototype.
 *
 * @example
 * ```ts
 * import { extend, unextend } from "@mhesus/mcbe-colors/extend";
 *
 * // Extend the string class
 * extend();
 *
 * // Works!!
 * "Make this blue!".blue() === "§cMake this blue!§r";
 *
 * // Remove the extensions created by the library
 * unextend();
 *
 * // Now errors because string no longer has the style methods
 * "Make this blue!".blue();
 * ```
 */
export function extend() {
  for (let [style, code] of Object.entries(StyleCode)) {
    Object.defineProperty(String.prototype, style, {
      get(this: string): StyledString {
        return new StyledString(code, this);
      },
      configurable: true,
    });
  }
}

/**
 * Removes the styling methods from the String prototype.
 *
 * @example
 * ```ts
 * import { extend, unextend } from "@mhesus/mcbe-colors/extend";
 *
 * // Extend the string class
 * extend();
 *
 * // Works!!
 * "Make this blue!".blue() === "§cMake this blue!§r";
 *
 * // Remove the extensions created by the library
 * unextend();
 *
 * // Now errors because string no longer has the style methods
 * "Make this blue!".blue();
 * ```
 */
export function unextend() {
  for (let style of Object.keys(StyleCode)) {
    delete String.prototype[style];
  }
}
