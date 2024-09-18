const obj = {
    name: "haha",
    age: 30,
};
const shallowCopy = Object.create(obj);
shallowCopy.age = 31;
console.log(obj);
console.log("shallowCopy", shallowCopy);
//这里因为是浅拷贝，拷贝了前一个对象的原型链

const shallowCopy1 = Object.assign({}, obj);
shallowCopy1.age = 31;
console.log(obj);
// { name: 'haha', age: 30 }
//Object.assign({}, obj);
//这里还是浅拷贝

const arr = [1, 2, 3];
const shallowCopy2 = [].concat(arr);
shallowCopy2[0] = 4;
console.log(arr);
// [ 1, 2, 3 ]
console.log(shallowCopy2);
// [ 4, 2, 3 ]
//这里是浅拷贝,通过将原数组的元素添加到一个新的数组中

//[...arr]
// const arr = [1, 2, 3];
// const shallowCopy3 = [...arr];
// shallowCopy3[0] = 4;
// console.log(arr);
// // [ 1, 2, 3 ]
// console.log(shallowCopy3);
// // [ 4, 2, 3 ]

//slice
// const arr = [1, 2, 3];
// const shallowCopy4 = arr.slice();
// shallowCopy4[0] = 4;
// console.log(arr);
// // [ 1, 2, 3 ]
// console.log(shallowCopy4);

const obj1 = {
    name: "haha",
    age: 30,
    address: {
        city: "shanghai",
        country: "China",
    },
};
const deepCopy1 = JSON.parse(JSON.stringify(obj1));
deepCopy1.address.city = "beijing";
deepCopy1.age = 31;
console.log(obj1);
// { name: 'haha', age: 30, address: { city: 'shanghai', country: 'China' } }
console.log(deepCopy1);
// { name: 'haha', age: 31, address: { city: 'beijing', country: 'China' } }

//这种方法虽然简单，但是有一些限制：比如不可以处循环引用，不可以拷贝函数，不可以拷贝正则等等

//深拷贝
//自定义一个深拷贝
function deepCopy(obj) {
    if (obj === null) return null;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    let cloneObj = new obj.constructor();

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepCopy(obj[key]);
        }
    }
    return cloneObj;
}

const target = {
    field1: 1,
    field2: undefined,
    field3: "huhu",
    field4: {
        child: "child",
        child2: {
            child2: "child2",
        },
    },
};

const clone = deepCopy(target);
console.log(clone);

//version 2

function deepCopy2(obj, hash = new WeakMap()) {
    if (obj === null) return null;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    if (hash.has(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepCopy2(obj[key], hash);
        }
    }
    return cloneObj;
}
//version 2 解决了对象的属性中直接的引用了自身的问题，也就是循环引用的问题

//!先判断是否是null，然后判断是否是Date RegExp 如果是那么就返回新建对象
//!如果不是对象，那么就返回原对象
//!如果weakMap中有这个对象，那就返回得到的对象
//!如果没有，那么就新建一个对象，然后将这个对象存入weakMap中