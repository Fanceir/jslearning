function Person(name, age) {
    this.name = name;
    this.age = age;
}
console.log(Person.prototype);

Person.prototype.message = function () {
    console.log("我是" + this.name + "，今年" + this.age + "岁");
};

//以上的操作都是拿到一个函数的原型对象，然后给这个原型对象添加属性和方法

//也就是在原有的原型对象上修改，这样所有的实例对象都可以访问到这个属性和方法

Person.prototype = {
    message: "nihao",
    say: function () {
        console.log("hello");
    },
    constructor: Person,
};
//在堆内存里创建一个新的对象，然后将这个对象的constructor属性指向Person函数
//但是这样操作时没有默认的constructor属性的，所以需要手动添加

var p = new Person("fan", 18);
console.log(p.message);
//在这里新建实例对象，这个实例对象的原型对象是上面的新建的对象，所以这个实例对象没有message属性

