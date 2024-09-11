function Person() {}
console.log(Person.prototype);
// 打印出来的是一个对象，里面有一个constructor属性，这个属性指向Person函数
var PersonPrototype = Person.prototype;
console.log(PersonPrototype.constructor === Person); //true
//这里可以验证constructor属性指向Person函数
console.log(PersonPrototype.constructor.name); //Person
//一般通过这个来验证constructor属性指向的是哪个函数

var p = new Person();
console.log(p.__proto__.constructor === Person); //true
//可以通过p的__proto__属性来找到显式原型对象，然后通过constructor属性来验证指向的是哪个函数
