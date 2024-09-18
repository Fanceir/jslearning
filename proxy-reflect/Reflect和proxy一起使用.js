obj = {
    name: "hello",
    age: 18,
};
const objProxy = new Proxy(obj, {
    set: function (target, key, newValue, receiver) {
        // target[key] = newValue;
        //如果是不可写的画，这里是操作失败的
        // //代理的目的是不要直接操作原来的对象
        isSuccess = Reflect.set(target, key, newValue); //这个会返回一个boolean值
        if (!isSuccess) {
            // console.log("set失败");
            throw new Error(`set${key}失败`);
        }
    },
    get: function (target, key, receiver) {},
});

objProxy.name = "world";

console.log(obj);
