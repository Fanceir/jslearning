// const obj = {
//     name: "hello ",
// };

// //添加一个新的属性 也有可能叫name

// obj.name = "world";
// //这样会把原来的属性给覆盖掉

// //我不想覆盖掉原来的属性，我想添加一个新的属性

// //这时候就可以使用symbol
// const name = Symbol("name");
// obj[name] = "world";
// //在es6之前对象的属性名都是字符串的形式所以很容易造成属性名的冲突
// //而使用symbol可以保证属性名的唯一性
// console.log(obj);
// //{ name: 'world', [Symbol(name)]: 'world' }

const s1 = Symbol();
const obj = {
    [s1]: "hello",
};
console.log(obj[s1]); //hello
//symbol 也可以作为key值

const s2 = Symbol();
obj[s2] = "bbb";
console.log(obj[s2]); //bbb

function foo(obj) {
    const skey = Symbol();
    obj[skey] = "world";
    delete obj[skey];
}
foo(obj);

