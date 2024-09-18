//Reflect 就是一个对象，所以不能使用new进行调用

//reflect的方法和object的方法类似
//缺少对对象本身的操作所以有了reflect

// Object本身是一个构造函数，会使Object变得很多
"use strict";
const obj = {
    name: "hello",
    age: 18,
};
Object.defineProperty(obj, "name", {
    configurable: false,
});
// delete obj.age;
// //如何判断一个对象是否存在某个属性
// if (obj.name) {
//     console.log("没有删除成功");
// }
//Reflect
Reflect.deleteProperty(obj, "name");
//这返回一个boolean值
if (Reflect.deleteProperty(obj, "name")) {
    console.log("name删除成功");
} else {
    console.log("name删除失败");
}
