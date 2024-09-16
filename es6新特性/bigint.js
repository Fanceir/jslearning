//BigInt的用法

const max = Number.MAX_SAFE_INTEGER;
// 9007199254740991
console.log(max);
const BigInt_test = BigInt(Number.MAX_SAFE_INTEGER + 1);
// 9007199254740992n
console.log(BigInt_test);
