function tokenizer(input) {
  let current = 0;
  let tokens = [];
  while (current < input.length) {
    let char = input[current];
    if (char === "(") {
      tokens.push({
        type: "paren",
        value: "(",
      });
      current++;
      continue;
    }
    if (char === ")") {
      tokens.push({
        type: "paren",
        value: ")",
      });
      current++;
      continue;
    }
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }
    let NUMBER = /[0-9]/;
    if (NUMBER.test(char)) {
      let value = "";
      while (NUMBER.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: "number",
        value,
      });
      continue;
    }
    if (char === '"') {
      let value = "";
      char = input[++current];
      while (char !== '"') {
        value += char;
        char = input[++current];
      }
      char = input[++current];
      tokens.push({
        type: "string",
        value,
      });
      continue;
    }
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = "";
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: "name",
        value,
      });
      continue;
    }
    throw new TypeError("I don't know what this character is: " + char);
  }
  return tokens;
}
console.log(tokenizer("(add 2 (subtract 4 2))"));
