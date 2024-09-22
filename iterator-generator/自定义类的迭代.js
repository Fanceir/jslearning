class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    [Symbol.iterator]() {
        let index = 0;
        const iterator = {
            next: () => {
                if (index < Object.entries(this).length) {
                    return { done: false, value: Object.entries(this)[index++] };
                }
                else
                    return { done: true, value: undefined };
            }
        }
        return iterator;
    }
}
const p1 = new Person("aaa", 18);
const p2 = new Person("bbb", 20);
for (const p of p1) {
    console.log(p);
}
//默认情况下对象是不可以迭代的
//希望通过自定义类创建出来的对象都是可迭代的
for (const p in p1) {
    console.log(p);
}

for (const key of Object.keys(p1)) {
    console.log(key);
}