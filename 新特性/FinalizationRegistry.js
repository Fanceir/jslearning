let obj = { name: "hello", age: 18 };

const finalRegistry = new FinalizationRegistry((value) => {
    console.log("某一个对象被回收了:", value);
});

finalRegistry.register(obj, "hello");

obj = null;
