function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}
Person.prototype.running = function () {
    console.log(this.name + "在跑步");
};
Person.prototype.eating = function () {
    console.log(this.name + "在吃饭");
};

function Student(name, age, height, score) {
    Person.call(this, name, age, height);
    this.score = score;
}
//这里使用了一个call方法，将Person的this指向了Student的this，这样就可以实现继承了

//inherit_util.js
function inherit(subType, superType) {
    subType.prototype = Object.create(superType.prototype);
    Object.defineProperty(subType, "constructor", {
        value: subType,
        enumerable: false,
        configurable: true,
        writable: true,
    });
}

inherit(Student, Person);
var stu1 = new Student("小明", 18, 180, 100);

console.log(stu1);
stu1.running();
stu1.eating();
