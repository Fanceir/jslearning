//生成器是一种函数控制和使用的方案，可以控制什么时候执行，什么时候暂停执行
//生成器函数需要再function后加一个*
//生成器函数可以通过yield关键字来控制函数的执行修成
//生成器函数返回的是一个生成器对象，迭代器对象有一个next方法，可以执行生成器函数

function* foo() {
    console.log("111");
    yield;
    console.log("222");
    yield;
    console.log("333");
    yield;
    console.log("444");
    yield;
    console.log("555");
    return "end";
}
foo();
const generator = foo()
generator.next();
//当遇到yield关键字后会停止执行
generator.next();
generator.next();