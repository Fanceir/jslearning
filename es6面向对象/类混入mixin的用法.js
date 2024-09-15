//js只支持单继承
class Animal {
    running() {}
}
function mixinAnimal(BaseClass) {
    return class extends BaseClass {
        running() {
            console.log("running");
        }
    };
}
function mixinRunner(BaseClass) {
    return class extends BaseClass {
        running() {
            console.log("running");
        }
    };
}
//先继承传过来的类，返回一个新的类，也就是在普通的类上mixin 了一个running

class Bird {
    eating() {
        console.log("eating");
    }
}
var newBird = mixinAnimal(Bird);
//还可以嵌套调用

var newBird = mixinRunner(mixinAnimal(Bird));
var bird = new newBird();
bird.running();

//这就是一种mixin的写法
