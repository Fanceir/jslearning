const s1 = Symbol();
const s2 = Symbol();
const obj = {
    age: 18,
    [s1]: "hello",
    [s2]: "world",
};
const obj1 = {};
Object.defineProperty(obj1, s1, {
    value: "hello",
    writable: true,
    enumerable: true,
    configurable: true,
});

//如果对象中又symbol，如何获取symbol的属性名
console.log(Object.keys(obj)); //['age']
const symbolKeys = Object.getOwnPropertySymbols(obj);
//获取对象中的symbol属性名
for (let key of symbolKeys) {
    console.log(obj[key]); //Symbol()
}

//description
const s3 = Symbol("ccc");
console.log(s3.description);

const s4 = Symbol(s3.description);
console.log(s4 === s3); //false
// 不管是不是相同的description，Symbol()创建的都是唯一的symbol
const s5 = Symbol.for(s3.description);
console.log(s5 === s3); //false
const s6 = Symbol.for(s3.description);
console.log(s6 === s3); //true
//Symbol.for()创建的symbol是全局的，如果description相同，返回的是同一个symbol
console.log(Symbol.keyFor(s5));
