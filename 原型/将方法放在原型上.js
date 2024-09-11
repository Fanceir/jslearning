function Student(name, age, sno) {
    this.name = name;
    this.age = age;
    this.sno = sno;
    // this.running = function () {
    //     console.log("running");
    // };
    // this.eating = function () {
    //     console.log("eating");
    // };
}
//这样会创建很多个函数对象
Student.prototype.running = function () {
    console.log(this.name + "running");
};
var stu1 = new Student("haha", 30, 1);
stu1.running();
//先在自己的对象里查找，然后在原型中查找
//将对应的函数放到原型上面
 