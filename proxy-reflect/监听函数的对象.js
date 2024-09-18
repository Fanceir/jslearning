function foo() {
    console.log(this, arguments);
}
const fooProxy = new Proxy(foo, {
    apply: function (target, thisArg, argumentsList) {
        console.log(`调用函数 ${target.name}(${argumentsList})`);
        return target.apply(thisArg, argumentsList);
    },
    construct: function (target, argumentsList) {
        console.log(`构造函数 ${target.name}(${argumentsList})`);
        return new target(...argumentsList);
    },
});
fooProxy.apply(null, [1, 2, 3]);
new fooProxy(1, 2, 3);
