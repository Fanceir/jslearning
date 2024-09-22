// const infos = {
//     friends: ["a", "b", "c"],
//     [Symbol.iterator]: function () {
//         let index = 0;
//         const infosIterator = {
//             next: () => {
//                 if (index < this.friends.length) {
//                     return { done: false, value: this.friends[index++] };
//                 }
//                 else
//                     return { done: true, value: undefined };
//             }
//         }
//         return infosIterator;
//     }
// }
//改为箭头函数就可以访问到this为对象的this，以上是迭代infos中的friends
//!迭代infos中的key
const infos = {
    friends: ["a", "b", "c"],
    age: 18,
    height: 180,
    [Symbol.iterator]: function () {
        const entries = Object.entries(this);
        let index = 0;
        const infosIterator = {
            next: () => {
                if (index < entries.length) {
                    return { done: false, value: entries[index++] };
                }
                else
                    return { done: true, value: undefined };
            }
        }
        return infosIterator;
    }
}
const iterator = infos[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
for (const item of infos) {
    const [key, value] = item
    console.log(key, value)
}