const names = ["names", "age"]
for (const name of names) {
    console.log(name)
}
const set = new Set([1, 2, 3, 4, 5, 7, 9]);
for (const st of set) {
    console.log(st);
} console.log(set[Symbol.iterator]());
//set 也是一个可迭代的对象