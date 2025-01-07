import Babel, { types } from "@babel/core";
import fs from "fs";
const file = fs.readFileSync("./test.js", "utf8");
//() => {} 会被转换为 function() {}

const transformFunction = ({ types: t }) => {
  return {
    name: "transform-function",
    visitor: {
      //匹配箭头函数转成funcion
      ArrowFunctionExpression(path) {
        console.log(path.node);
        const node = path.node;
        //async
        const arrowFuntion = t.functionExpression(
          null, //匿名函数
          node.params, //参数
          t.blockStatement([t.returnStatement(node.body)]), //函数体
          node.generator,
          node.async
        );
        path.replaceWith(arrowFuntion);
      },
    },
  };
};
const result = Babel.transform(file, {
  plugins: [transformFunction],
});
console.log(result.code);
