function Foo() {
    //创建一个新的对象
    //将函数的prototype原型复制给这个对象的__proto__
}
var foo1 = new Foo();
console.log(fool.__proto__); //这里的__proto__ 是Foo的prototype
console.log(Foo.prototype); //是有显示原型
//习惯来说当作构造函数要大写
console.log(foo1.__proto__ === Foo.prototype); //true
