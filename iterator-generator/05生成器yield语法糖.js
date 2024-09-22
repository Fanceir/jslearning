
// const names = ["abc", "cba", "nba"]
// const nums = [100, 22, 66, 88, 55]

// function* createArrayIterator(arr) {
//   yield* arr
// }

// const namesIterator = createArrayIterator(names)
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
class Person {
    constructor(name, age, friends) {
        this.name = name;
        this.age = age;
        this.friends = friends;
    }
    *[Symbol.iterator]() {
        yield* this.friends
    }
}
//yield* 是一个语法糖
const p1 = new Person("aaa", 18, ["bbb", "ccc", "ddd"]);
for (const item of p1) {
    console.log(item);
    if (item === "ccc") {
        break;
    }
    //break return throw 会中断迭代器
}
const pIterator = p1[Symbol.iterator]()
console.log(pIterator.next());
console.log(pIterator.next());
console.log(pIterator.next());
console.log(pIterator.next());
console.log(pIterator.next());
console.log(pIterator.next());
console.log(pIterator.next()); 
