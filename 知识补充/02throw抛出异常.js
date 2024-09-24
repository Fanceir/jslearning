function foo() {
    console.log("foo function");
    throw new error("error");


}
function bar() {
    console.log("bar function");
    foo();
}
bar();