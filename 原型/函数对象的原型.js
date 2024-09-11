var obj = {};
function foo() {}
console.log(foo.__proto__);
console.log(obj.__proto__);
//函数也有一个隐藏属性prototype
//函数作为一个普通的对象是有prototype属性的

//当你是一个函数的时候是有prototype属性的
console.log(foo.prototype); //{ constructor: [Function: foo] }
//这里直接就拿到了函数的prototype属性

//对象是没有prototype属性的
