//定义一个父类
class Person {
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
class Student extends Person {
    constructor(name, age, score) {
        super(name, age);
        //这是构造函数中的一个关键字，表示调用父类的构造函数
        this.score = score;
    }
    studying() {
        console.log(this.name + "在学习");
    }
}

var stu1 = new Student("小明", 18, 100);
stu1.running();
stu1.eating();
stu1.studying();
