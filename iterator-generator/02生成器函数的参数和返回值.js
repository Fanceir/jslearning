
function* foo(value1) {
    console.log("111", value1);
    const value2 = yield "aaa";
    console.log("222", value2);
    const value3 = yield "bbb";
    console.log("333", value3);
    yield "ccc";
    console.log("444");
    yield "ddd";
    console.log("555");
    return undefined;
}
const generator = foo("value1");
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//传入一个参数
console.log(generator.next());
console.log(generator.next("value2"));
console.log(generator.next("value3"));
//第一次传参是foo里传