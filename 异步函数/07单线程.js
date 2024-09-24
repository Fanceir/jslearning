let name = "hello";
name = "world";
function bar() {
    console.log("bar function");
}
function foo() {
    console.log("foo function");
    setTimeout(() => {
        console.log("setTimeout function");
    }, 10000);
    bar();
}
foo();