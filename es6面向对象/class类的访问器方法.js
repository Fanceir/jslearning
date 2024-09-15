class Person {
    constructor(name, age, height) {
        this._name = name;
    }
    set name(val) {
        console.log("set");
        this._name = val;
    }
    get name() {
        console.log("get");
        return this._name;
    }
}

var p1 = new Person("小明", 18, 180);
p1.name = "小红";
console.log(p1.name);
var p2 = new Person("小明", 18, 180);
p2.name = "小sd";
console.log(p2.name);

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    get position() {
        return { x: this.x, y: this.y };
    }
    get size() {
        return { width: this.width, height: this.height };
    }
}
var rect1 = new Rectangle(10, 10, 100, 100);
console.log(rect1.position);
console.log(rect1.size);
