function foo() {
    console.log("foo function");
    throw new error("error");
    console.log("foo function");
}
function test() {
    try {
        foo();
    } catch (e) {
        console.log(e);
    }
}
test();
console.log("script end");
//这样后续的代码也可以执行了
