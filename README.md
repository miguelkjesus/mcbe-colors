# mcbe-colors

A library that implements a simple text coloring system for use within the Minecraft: Bedrock Edition script api.

[npm](https://www.npmjs.com/package/@mhesus/mcbe-colors) | [github](https://github.com/miguelkjesus/mcbe-colors)

## Examples

```ts
// -- Using the Style class --
import { Style } from "@mhesus/mcbe-colors";

Style.red("example") === "§cexample§r";
```

```ts
// -- Import the color directly --
import { red } from "@mhesus/mcbe-colors";

red("example") === "§cexample§r";
```

```ts
// -- Using the StyleCode enum --
import { StyleCode } from "@mhesus/mcbe-colors";

`${StyleCode.red}example${StyleCode.reset}` === "§cexample§r";
```

```ts
// -- Compounding styles --
import { red, italic, aqua } from "@mhesus/mcbe-colors";

// style codes are applied in the order they're written
red.bold("red bold") === "§c§lred bold§r";

italic.red("italic red") === "§o§citalic red§r";

/* all the color codes created in the chain will be applied, 
   even if colors conflict. in game, the last color applied 
   will take effect. */
aqua.green("green") === "§b§agreen§r";
```

```ts
// -- Creating style presets --
import { red, green, gray } from "@mhesus/mcbe-colors";

const success = green;
const error = red.bold;
const info = gray.italic;

success("Success.") === "§aSuccess.§r";

error("Error!") === "§c§lError!§r";

info("Info?") === "§7§oInfo?§r";
```

## Installation

If you use a bundler to bundle your behaviour pack scripts, you can simply install this library through npm:

```
npm i @mhesus/mcbe-colors
```

Otherwise, you should copy the source files into your own project. If you use javascript, you should clone this repository and build it by executing the following in your terminal:

```
git clone https://github.com/miguelkjesus/mcbe-colors
cd mcbe-colors
npm run build
```

The javascript files can then be found within the `build/` directory. (Make sure to ignore the `.d.ts` files)
