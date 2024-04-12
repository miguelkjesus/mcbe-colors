# mcbe-colors

A library that implements a simple text coloring system for use within the Minecraft: Bedrock Edition script api.

[npm](https://www.npmjs.com/package/@mhesus/mcbe-colors) | [github](https://github.com/miguelkjesus/mcbe-colors)

- [View the currently supported styles](style_codes.md)
- [View the currently supported symbols](symbols.md)

## Installation

If you use a bundler to bundle your behaviour pack scripts, you can simply install this library through npm:

```plaintext
npm i @mhesus/mcbe-colors
```

If you don't use a bundler, I would recommend learning to use one as it is the best and easiest way to use other people's libraries. Some official mojang libraries, such as @minecraft/math, require it.

- [A tutorial for ESBuild and Regolith](https://jaylydev.github.io/posts/bundle-minecraft-scripts-esbuild/)

### Self-compilation

Otherwise, you should copy the source files into your own project. If you use javascript, you should clone this repository and build it by executing the following in your terminal:

```plaintext
git clone https://github.com/miguelkjesus/mcbe-colors
cd mcbe-colors
npm run build
```

You can then copy the **/build** folder into your project (Make sure to delete the **.d.ts** files) and rename it something suitable e.g. the name of this library.

## Usage

### Extending the String Class

In order to extend the string class, you can import the **/extend-auto** export of this library which will automatically extend the class for you:

```ts
import "@mhesus/mcbe-colors/extend-auto";

"Make this red!".red() === "§cMake this red!§r";
"Now gold and italicised!".gold.italic() === "§p§oNow gold and italicised!§r";
```

Preferrably you should put this import somewhere in your index file.

Another way to extend the string class is importing the **/extend** export of this library and choose to extend/unextend the class whenever it is needed. This can prove useful in some niche situations, otherwise I would either not extend the class at all, or just use /extend-auto.

```ts
import { extend, unextend } from "@mhesus/mcbe-colors/extend";

// Extend the string class
extend();

// Works!!
"Make this blue!".blue() === "§cMake this blue!§r";

// Remove the extensions created by the library
unextend();

// Errors because string no longer has the style methods
"Make this blue!".blue();
```

### Styles

```ts
// -- Using the Style class --
import { Style } from "@mhesus/mcbe-colors";

Style.red("Make me red!") === "§cMake me red!§r";
```

```ts
// -- Import the color directly --
import { red } from "@mhesus/mcbe-colors";

red("Make me red!") === "§cMake me red!§r";
```

```ts
// -- Compounding styles --
import { red, italic, aqua } from "@mhesus/mcbe-colors";

// Style codes are applied in the order they're called
red.bold("Red bold.") === "§c§lRed bold.§r";

italic.red("Italic red.") === "§o§cItalic red.§r";

/* All the color codes created in the chain will be applied, 
   even if colors conflict. In game, the last color applied 
   will take effect. */
aqua.green("I will be green.") === "§b§aI will be green.§r";

/* I wouldn't recommend compounding styles like this as then the
   reset symbol at the end will be unnecessarily repeated. */
aqua(green("I will be green.")) === "§b§aI will be green.§r§r";
```

### Style Presets

This isn't necessarily a distinct way of using the library, more is it a useful thing that you can do in addition to using the other methods.

```ts
import { red, green, gray } from "@mhesus/mcbe-colors";

// Assigning presets
const success = green;
const error = red.bold;
const info = gray.italic;

// Applying presets
success("Success.") === "§aSuccess.§r";

error("Error!") === "§c§lError!§r";

info("Info?") === "§7§oInfo?§r";
```
