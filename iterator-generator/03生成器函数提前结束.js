function* foo(value1) {
    console.log("111", value1);
    const value2 = yield "aaa";
    console.log("222", value2);
    const value3 = yield "bbb";
    console.log("333", value3);
    const value4 = yield "ccc";
    console.log("444", value4);
    yield "ddd";
    console.log("555");
    try {
        yield "eee";
    }
    catch (error) {
        console.log("error", error);
    }
}
// const generator = foo("value1");
// console.log(generator.next());
// console.log(generator.next("value2"));
// console.log(generator.next("value3"));
// console.log(generator.next("value4"));
const generator = foo("value1");
console.log(generator.next());
console.log(generator.next("value2"));
console.log(generator.return("value3"));
console.log(generator.next("value4"));
console.log(generator.next("value5"));
console.log(generator.throw("error")); 
