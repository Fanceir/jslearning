function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.running = function () {
    console.log("running");
};

Person.prototype.eating = function () {
    console.log("eating");
};
function Student(name, age, score) {
    //借用构造函数
    Person.call(this, name, age);
    this.score = score;
}
//这里把this指向了student，所以student的实例对象就有了person的属性
var stu1 = new Student("xiaoming", 18, 100);
//创建一个空对象
//将空对象赋值this
//将空对象的隐式原型指向构造函数的显示原型
//执行构造函数
//返回这个对象
