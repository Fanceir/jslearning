function Person1(name, age) {
    this.name = name;
    this.age = age;
}

Person1.prototype.running = function () {
    console.log(this.name + "在跑步");
};

Person1.prototype.eating = function () {
    console.log(this.name + "在吃饭");
};

var p11 = new Person1("小明", 18);
console.log(p11.__proto__ === Person1.prototype); // true
console.log(Person1.prototype.constructor);

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    running() {
        console.log(this.name + "在跑步");
    }
    eating() {
        console.log(this.name + "在吃饭");
    }
}

var p22 = new Person2("小明", 18);

console.log(Person2.prototype === p22.__proto__); //true
console.log(Person2.prototype.constructor); // [Function: Person2]
console.log(typeof Person2); //function

// 1. class是一个语法糖，本质上还是原型链继承
// 2. class中的constructor是一个构造函数，只能有一个，不能有重载
// 3. class中的方法是定义在原型上的

//不同点 function Person1是一个普通的函数所以可以正常调用
Person1("abc", 0);
// Person2("cba", 0);

//这是区别 class定义的类不能作为一个普通的函数进行调用
