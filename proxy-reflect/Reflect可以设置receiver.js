obj = {
    _name: "hello",
    set name(newValue) {
        console.log(`this:`, this); //this默认是obj
        //如何改变this的指向
        //在proxy中使用receiver
        this._name = newValue;
    },
    get name() {
        return this._name;
    },
    age: 18,
};
const objProxy = new Proxy(obj, {
    //receiver是一个对象，是一个代理对象
    set: function (target, key, newValue, receiver) {
        // target[key] = newValue;
        //* 如果是不可写的，这里是操作失败的
        // 代理的目的是不要直接操作原来的对象

        // console.log(receiver === objProxy);//true
        //* receiver就是外面的proxy对象
        //* receiver可以改变this的指向
        isSuccess = Reflect.set(target, key, newValue, receiver); //这个会返回一个boolean值
        if (!isSuccess) {
            // console.log("set失败");
            throw new Error(`set${key}失败`);
        }
    },
    get: function (target, key, receiver) {
        console.log("Proxy 中获取方法被调用");
        return Reflect.get(target, key, receiver);
    },
});

objProxy.name = "world";

console.log(obj);

objProxy.name = "copy";
console.log(obj); //{ _name: 'copy', name: [Getter/Setter], age: 18 }

//!好处
//*代理对象的目的是不要直接操作原来的对象
//*reflect可以返回一个boolean值
//*receiver就是外层proxy对象
//*receiver可以改变this的指向，可以改变外层proxy对象的this指向
