const infos = {
    friends: ["a", "b", "c"],
}
//给infos创建一个迭代器
let index = 0;
//迭代里面的friends
const infosIterator = {
    next: function () {
        if (index < infos.friends.length) {
            return { done: false, value: infos.friends[index++] };
        }
        else
            return { done: true, value: undefined };
    }
}
console.log(infosIterator.next());
console.log(infosIterator.next());
console.log(infosIterator.next());

//优化
/*
实现一个特定的函数Symbol.iterator，这个函数会返回一个迭代器对象,这个迭代器用于迭代当前的对象
当前对象就是一个可迭代对象
*/
const infos2 = {
    friends: ["a", "b", "c"],
    [Symbol.iterator]: function () {
        let index = 0;
        const infos2Iterator = {
            next: function () {
                if (index < infos2.friends.length) {
                    return { done: false, value: infos2.friends[index++] };
                }
                else
                    return { done: true, value: undefined };
            }
        }
        return infos2Iterator;
    }
}
//for of循环会自动调用Symbol.iterator方法
for (const friend of infos2) {
    console.log(friend);
}
//同理数组也是一个可迭代对象
const arr = [1, 2, 3];
for (const item of arr) {
    console.log(item);
}
console.log(arr[Symbol.iterator]());//Object [Array Iterator] {}