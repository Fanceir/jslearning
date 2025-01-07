//记得设置package.json的type为module
import Babel from "@babel/core";
import presetEnv from "@babel/preset-env";
import fs from "node:fs";
const file = fs.readFileSync("./test.js", "utf8");
const result = Babel.transform(file, {
  presets: [presetEnv],
});
console.log(result.code);
