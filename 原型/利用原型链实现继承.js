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
    this.name = name;
    this.age = age;
    this.score = score;
}
// Student.prototype.running = function () {
//     console.log("running");
// };
// Student.prototype.eating = function () {
//     console.log("eating");
// };
Student.prototype.study = function () {
    console.log("study");
};
//以上是没有继承的，所以现在我们要实现继承
//如何继承父类的属性和方法
var stu1 = new Student("xiaoming", 18, 100);
//将学生的显式原型
console.log(stu1.running); //这是会报错的，因为是没有实现继承的
//stu1在自己的属性和方法中找，找不到就会去原型对象中找

// Student.prototype = Person.prototype;
//这种方法是错误的是会导致student的原型对象和person的原型对象是同一个对象,这两个会指向同一个原型

//正确的方法
var p = new Person();
Student.prototype = p; //这个必须要在Student.prototype的方法之前

Student.prototype.study = function () {
    console.log("study");
};
//不能调整顺序，因为这样会导致student的原型对象和person的原型对象是同一个对象
console.log(stu2.running); //running
