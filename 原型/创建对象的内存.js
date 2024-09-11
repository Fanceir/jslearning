function Person(name, age) {
    this.name = name;
    this.age = age;
}
//name "Person"
//prototype {constructor: ƒ}，这个prototype是指向Person函数的原型对象的constructor属性
//Person的原型对象的constructor属性指向Person函数
var p1 = new Person("fan", 18);
var p2 = new Person("hha", 20);

//创建一个新的空对象，内存中开辟一个新的空间
//然后将这个空对象的__proto__属性指向Person函数的原型对象,也就是隐式原型指向显式原型
//然后将Person函数的this指向这个空对象
//然后执行Person函数，将这个空对象作为this传入
Person.prototype.say = function () {
    console.log("我是" + this.name + "，今年" + this.age + "岁");
};
//Person函数的原型对象添加一个say方法

p1.__proto__.say();
Person.prototype.address = "北京";
p1.__proto__.address = "上海";

console.log(p1.address); //上海
console.log(p2.address); //北京
//这是因为p1已经找到了address属性，所以不会再去原型对象中找，而p2没有找到，所以会去原型对象中找

p1.__proto__.info = "我是一个好人";
//给原型对象添加一个info属性
