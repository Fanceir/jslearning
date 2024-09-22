const info = {
    name: "why",
    age: 18,
    height: 54,
    [Symbol.iterator]: function () {
        const values = Object.values(this);
        let index = 0;
        const iterator = {
            next: function () {
                if (index < values.length) {
                    return { done: false, value: values[index++] };
                }
                else
                    return { done: true, value: undefined };
            }
        }
        return iterator;
    }
}
function foo(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}
foo(...info);
//如果是一个可迭代对象那么就可以使用扩展运算符
// 创建另外一些对象的时候也是要传入可迭代对象
const set = new Set(["aaa", "bbb", "ccc"]);
//这里的数组也是一个可迭代对象
console.log([...set]);
const set1 = new Set(info);
console.log([...set1]);

//一些常用的方法
const p1 = Promise.resolve("aaa");
const newSet = new Set();
const p2 = Promise.resolve("bbb");
const p3 = Promise.resolve("ccc");
newSet.add(p1);
newSet.add(p2);
newSet.add(p3);

Promise.all(newSet).then(res => {
    console.log("res:", res);
})


function bar() {
    //将arguments转换为数组
    const arr = Array.from(arguments);
    console.log(arr);
}
bar("aaa", 121, 4242);
