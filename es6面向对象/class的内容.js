var obj = {
    running: function () {
        console.log(this.name + "在跑步");
    },
    eating: function () {
        console.log(this.name + "在吃饭");
    },
};

class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    //实例方法
    running() {
        console.log(this.name + "在跑步");
    }
    //这个方法是在原型上的
}
//这里的constructor只可以写一个js中不可以有函数的重载

//首先会创建一个空的对象，然后通过this进行赋值，最后返回这个对象
//会将person的显示原型赋值给新的隐式原型

var p1 = new Person("小明", 18, 180);
console.log(p1);
p1.running();
//constructor就是类中的构造函数
console.log(p1.__proto__ === Person.prototype);
console.log(Person.running); //running 本质上是放在Person的prototype上的
console.log(Person.prototype.running); //[Function: running]
