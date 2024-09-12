function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Student(name, age, score) {
    Person.call(this, name, age);
    this.score = score;
}

//1
var p = new Person();
Student.prototype = p;
//这种方法不好，因为这样会导致student的原型对象和person的原型对象是同一个对象

//2

var obj = {};
// obj.__proto__ = Person.prototype;
obj.setPrototypeof(obj, Person.prototype);
Student.prototype = obj;
//这种方法是正确的，因为这样会导致student的原型对象和person的原型对象是不同一个对象

// 3
// function F() { }
// F.prototype = Person.prototype;
// Student.prototype = new F();

//4
//这种做法是先
function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function inherit(subType, superType) {
    subType.prototype = createObj(superType.prototype);
    Object.defineProperty(subType.prototype, "constructor", {
        value: subType,
        enumerable: false,
        configurable: true,
        writable: true,
    });
}
//或者
function Inherit(subType, superType) {
    subType = Object.create(superType.prototype);
    Object.defineProperty(subType, "constructor", {
        value: subType,
        enumerable: false,
        configurable: true,
        writable: true,
    });
}
