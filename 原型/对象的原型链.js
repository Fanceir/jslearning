var obj = {
    name: "obj",
    age: 18,
};
console.log(obj.message); //这里是没有message属性的
// var obj1 = new Object();
// console.log(obj1.__proto__ === Object.prototype); //true
//查找顺序
obj.__proto__ = {
    message: "hello",
    say: function () {
        console.log("world");
    },
};
console.log(obj.message); //hello
//1.在obj上查找
//2.在obj的原型对象上查找
//3.在obj的原型对象的原型对象上查找
//4.一直找到Object.prototype
