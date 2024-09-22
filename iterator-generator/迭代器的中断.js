class Person {
    constructor(name, age, friends) {
        this.name = name;
        this.age = age;
        this.friends = friends;
    }
    [Symbol.iterator]() {
        let index = 0;
        const iterator = {
            next: () => {
                if (index < this.friends.length) {
                    return { done: false, value: this.friends[index++] };
                }
                else
                    return { done: true, value: undefined };
            },
            return: () => {
                console.log("监听到迭代器中断了")
                return { done: true };
            }
        }
        return iterator;
    }
}
const p1 = new Person("aaa", 18, ["bbb", "ccc", "ddd"]);
for (const item of p1) {
    console.log(item);
    if (item === "ccc") {
        break;
    }
    //break return throw 会中断迭代器
}