class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a noise.");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        //父类方法的重写
        console.log(this.name + " barks.");
        super.speak();
    }
}
class cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(this.name + " meows.");
    }
}
//super方法要放在所有的this语句之前
var d = new Dog("Mitzie");
d.speak();
// Mitzie barks.
// Mitzie makes a noise.
//super方法是用来调用父类的构造函数
//这个是部分重写

var cat1 = new cat("小花");
cat1.speak();
// 小花 meows.
//这个是完全重写

