const obj = {
    name: "hello",
    age: 18,
    height: 180,
};
const objProxy = new Proxy(obj, {
    //target就是监听的对象就是obj
    //key就是obj的属性
    get: function (target, key) {
        console.log(`获取 ${key}: ${target[key]}`);
        return target[key];
    },
    set(target, key, value) {
        console.log(`设置 ${key}: ${value}`);
        target[key] = value;
    },
});
//对obj的所有操作都去操作objProxy
console.log(objProxy.name);
objProxy.name = "world";
console.log(objProxy.name);

//即时obj的proxy里面没有函数也是会帮助你操作
//同时也会修改obj的值
