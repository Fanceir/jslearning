// 1.创建Set
const set = new Set();
console.log(set);

// 2.添加元素
set.add(10);
set.add(22);
set.add(35);
set.add(22);
console.log(set);

const info = {};
const obj = { name: "obj" };
set.add(info);
set.add(obj);
set.add(obj);
console.log(set);

// 3.应用场景: 数组的去重
const names = ["abc", "cba", "nba", "cba", "nba"];
// const newNames = []
// for (const item of names) {
//   if (!newNames.includes(item)) {
//     newNames.push(item)
//   }
// }
// console.log(newNames)
const newNamesSet = new Set(names);
const newNames = Array.from(newNamesSet);
console.log(newNames);

// 4.Set的其他属性和方法
// 属性
console.log(set.size);
// 方法
// 4.1. add方法
set.add(100);
console.log(set);
// 4.2. delete方法
set.delete(obj);
console.log(set);
// 4.3. has方法
console.log(set.has(info));
//返回true和false

set.forEach((item) => console.log(item));

// 5.set支持for...of
for (const item of set) {
    console.log(item);
}

st = new Set();
st.add(1);
console.log(st.has(1));
