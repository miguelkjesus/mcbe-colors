import { StyledString } from "./StyledString.js";
import { StyleCode } from "./StyleCode.js";

let originalProperties = {};
let overwrittenProperties = {};

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
    originalProperties[style] = Object.getOwnPropertyDescriptor(
      String.prototype,
      style
    );

    let prop = {
      get(this: string): StyledString {
        return new StyledString(code, this);
      },
      configurable: true,
      enumerable: false,
    };

    Object.defineProperty(String.prototype, style, prop);
    overwrittenProperties[style] = prop;
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
    // Check if it hasnt been overwritten in the time it was last extended
    let currProp = Object.getOwnPropertyDescriptor(String.prototype, style);
    let extendedProp = overwrittenProperties[style];
    console.log("\n" + style);
    if (isPropertyDescriptorEqual(currProp, extendedProp)) {
      let ogProp = originalProperties[style];
      console.log(ogProp);
      if (ogProp === undefined) {
        delete String.prototype[style];
      } else {
        Object.defineProperty(String.prototype, style, ogProp);
      }
    }
  }
}

function isPropertyDescriptorEqual(
  a: PropertyDescriptor,
  b: PropertyDescriptor
) {
  if (a === b) return true;
  return (
    a.value === b.value &&
    a.writable === b.writable &&
    a.configurable === b.configurable &&
    a.enumerable === b.enumerable &&
    a.get === b.get &&
    a.set === b.set
  );
}
