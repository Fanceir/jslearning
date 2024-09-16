var obj = {};
var ws = new WeakSet();

ws.add(obj);
console.log(ws.has(obj)); //true

//set都是弱引用
// 如果是weakset那么如果这个对象没有被引用，那么这个对象会被回收掉

//weakset是不能遍历的

const pweakset = new WeakSet();
class Person {
    constructor() {
        pweakset.add(this);
    }
    running() {
        if (!pweakset.has(this)) {
            console.log("error");
            return;
        }
        console.log("running");
    }
}

const p = new Person();

p.running(); //running

const runFn = p.running;
runFn(); //error

const obj1 = { run: runFn };
obj1.run(); //error
//这个是因为runFn的this指向了obj1，而obj1不在weakset中
