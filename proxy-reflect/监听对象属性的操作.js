const obj = {
    name: "hello",
    age: 18,
};
const keys = Object.keys(obj);
for (const key of keys) {
    let value = obj[key];
    Object.defineProperty(obj, key, {
        get() {
            console.log(`获取 ${key}: ${value}`);
            return value;
        },
        set(newValue) {
            console.log(`设置 ${key}: ${newValue}`);
            value = newValue;
        },
    });
}

obj.name = "world";
console.log(obj.name);
// set name: world
