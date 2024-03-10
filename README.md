# mcbe-colors

A library that implements a simple text coloring system for use within the Minecraft: Bedrock Edition script api.

[npm](https://www.npmjs.com/package/@mhesus/mcbe-colors) | [github](https://github.com/miguelkjesus/mcbe-colors)

## Installation

### Method 1: Bundler (RECOMMENDED + EASIEST)

If you use a bundler to bundle your behaviour pack scripts, you can simply install this library through npm:

```
npm i @mhesus/mcbe-colors
```

If you don't use a bundler, I would recommend learning to use one as it is the best and easiest way to use other people's libraries. Some official mojang libraries for addon making such as `@minecraft/math` require it. Personally, I use rollup after trying a few different bundlers, however you can use whatever works best for you.

### Method 2: No bundler and you use Javascript (Build yourself)

Otherwise, you should copy the source files into your own project. If you use javascript, you should clone this repository and build it by executing the following in your terminal:

```
git clone https://github.com/miguelkjesus/mcbe-colors
cd mcbe-colors
npm run build
```

You can then copy the `/build` folder into your project (Make sure to delete the `.d.ts` files) and rename it something suitable e.g. the name of this library.

### Method 3: No Bundler and you use Typescript

If you use typescript, when you clone the repository, all you need to do is copy the `/src` directory instead of the `/build` directory.

## Usage

### Method 1: Extending the String Class

In order to extend the string class, you can import the **/auto** export of this library which will automatically extend the class for you:

```ts
import "@mhesus/mcbe-colors/auto";

"Make this red!".red() === "§cMake this red!§r";
"Now gold and italicised!".gold.italic() === "§6§oNow gold and italicised!§r";
```

Preferrably you should put this import somewhere in your index file.

Another way to extend the strinc class is importing the **/extend** export of this library and choose to extend/unextend the class whenever it is needed. This can prove useful in some niche situations, otherwise I would either not extend the class at all, or just use /auto.

```ts
import { extend, unextend } from "@mhesus/mcbe-colors/extend";

// Extend the string class
extend();

// Works!!
"Make this red!".red() === "§cMake this red!§r";

// Remove the extensions created by the library
unextend();

// Errors because string no longer has the style methods
"Make this blue!".blue();
```

### Method 2: Functions

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
// -- Compounding styles --
import { red, italic, aqua } from "@mhesus/mcbe-colors";

// Style codes are applied in the order they're called
red.bold("red bold") === "§c§lred bold§r";

italic.red("italic red") === "§o§citalic red§r";

/* All the color codes created in the chain will be applied, 
   even if colors conflict. In game, the last color applied 
   will take effect. */
aqua.green("green") === "§b§agreen§r";
```

### Method 3: Style Presets

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
