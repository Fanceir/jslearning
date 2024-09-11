var obj = {
    name: "haha",
    age: 30,
};
//当前这个对象也是有隐藏属性的
// 有一个[[Prototype]]属性，指向Object.prototype
//proto 是原型的意思
//如何获取prototype，想知道原型究竟是什么
console.log(obj.__proto__); //这是浏览器自己加的
console.log(Object.getPrototypeOf(obj)); //一般使用
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true
//下面是一个标准的方式，原型本身也是一个Object
console.log(obj.__proto__);
//原型有什么用
// 如果想要找到name先在自己的对象里找，找不到再去原型里找
Object.__proto__.message = "hello";
//Object.getPrototypeOf(obj).message = "hello";

console.log(obj.message); //hello
//这里是在Object的原型上添加了一个属性，所以obj可以找到

//js中每一个对象都有一个特殊的内置属性[[Prototype]]，这个属性是一个对象或者null
