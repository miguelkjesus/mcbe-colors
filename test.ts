import { red, green, blue } from "./src";

console.log(
  green(`This should be green, ${red(`red ${blue("hello")} lol.`)} and this!`)
);
