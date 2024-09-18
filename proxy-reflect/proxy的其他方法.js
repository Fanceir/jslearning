const obj = {
    name: "hello",
    age: 18,
    height: 180,
};

const objProxy = new Proxy(obj, {
    set: function (target, key, value) {
        console.log(`设置 ${key}: ${value}`);
        target[key] = value;
        return true; // set 需要返回 true
    },
    get: function (target, key) {
        console.log(`获取 ${key}: ${target[key]}`);
        return target[key];
    },
    deleteProperty: function (target, key) {
        // 这里是 deleteProperty
        console.log(`删除 ${key}`);
        delete target[key];
        return true; // deleteProperty 也需要返回 true
    },
    has: function (target, key) {
        console.log(`监听in判断 ${key}`);
        return key in target;
    },
});

objProxy.name = "world"; // 设置属性
console.log(objProxy.name); // 获取属性
delete objProxy.name; // 删除属性
console.log("name" in objProxy); // 是否有属性
