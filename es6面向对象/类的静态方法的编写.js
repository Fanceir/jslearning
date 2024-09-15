// function Person() {}
// Person.prototype.running = function () {};
// Person.randomPerson = function () {};
var names = ["小明", "小红", "小刚"];
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    running() {
        console.log(this);
    }
    static randomPerson() {
        console.log(this);
        var randomName = "name" + Math.random();
        var randomAge = Math.floor(Math.random() * 100);
        return new this(randomName, randomAge);
    } //注意这里有一个this指向的问题
}
var p1 = new Person("小明", 18);
console.log(Person.randomPerson());
