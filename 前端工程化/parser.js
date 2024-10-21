function parser(tokens) {
  let current = 0;
  function walk() {
    let token = tokens[current];
    if (token.type === "number") {
      current++;
      return {
        type: "NumberLiteral",
        value: token.value,
      };
    }
    if (token.type === "string") {
      current++;
      return {
        type: "StringLiteral",
        value: token.value,
      };
    }
    if (token.type === "paren" && token.value === "(") {
      token = tokens[++current];
      let node = {
        type: "CallExpression",
        name: token.value,
        params: [],
      };
      token = tokens[++current];
      while (
        token.type !== "paren" ||
        (token.type === "paren" && token.value !== ")")
      ) {
        node.params.push(walk());
        token = tokens[current];
      }
      current++;
      return node;
    }
    throw new TypeError(token.type);
  }
  let ast = {
    type: "Program",
    body: [],
  };
  while (current < tokens.length) {
    ast.body.push(walk());
  }
  return ast;
}
console.log(
  parser([
    { type: "paren", value: "(" },
    { type: "name", value: "add" },
    { type: "number", value: "2" },
    { type: "paren", value: "(" },
    { type: "name", value: "subtract" },
    { type: "number", value: "4" },
    { type: "number", value: "2" },
    { type: "paren", value: ")" },
    { type: "paren", value: ")" },
  ])
);
