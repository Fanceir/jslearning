const obj = {
    name: "haha",
    age: 30,
};
const shallowcopy = Object.create(obj);
shallowcopy.age = 31;
console.log(obj);
// { name: 'haha', age: 30 }
//这里因为是浅拷贝，拷贝了前一个对象的原型链

const shallowcopy1 = Object.assign({}, obj);
shallowcopy1.age = 31;
console.log(obj);
// { name: 'haha', age: 30 }
//Object.assign({}, obj);
//这里还是浅拷贝

const arr = [1, 2, 3];
const shallowcopy2 = [].concat(arr);
shallowcopy2[0] = 4;
console.log(arr);
// [ 1, 2, 3 ]
console.log(shallowcopy2);
// [ 4, 2, 3 ]
//这里是浅拷贝,通过将原数组的元素添加到一个新的数组中

//[...arr]
// const arr = [1, 2, 3];
// const shallowcopy3 = [...arr];
// shallowcopy3[0] = 4;
// console.log(arr);
// // [ 1, 2, 3 ]
// console.log(shallowcopy3);
// // [ 4, 2, 3 ]

//slice
// const arr = [1, 2, 3];
// const shallowcopy4 = arr.slice();
// shallowcopy4[0] = 4;
// console.log(arr);
// // [ 1, 2, 3 ]
// console.log(shallowcopy4);

const obj1 = {
    name: "haha",
    age: 30,
    address: {
        city: "shanghai",
        country: "China",
    },
};
const deepcopy1 = JSON.parse(JSON.stringify(obj1));
deepcopy1.address.city = "beijing";
deepcopy1.age = 31;
console.log(obj1);
// { name: 'haha', age: 30, address: { city: 'shanghai', country: 'China' } }
console.log(deepcopy1);
// { name: 'haha', age: 31, address: { city: 'beijing', country: 'China' } }

//这种方法虽然简单，但是有一些限制：比如不可以处循环引用，不可以拷贝函数，不可以拷贝正则等等

//深拷贝
//自定义一个深拷贝
function deepCopy(obj) {
    if (obj === null) return null;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    let cloneobj = new obj.constructor();

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneobj[key] = deepCopy(obj[key]);
        }
    }
    return cloneobj;
}

const target = {
    field1: 1,
    field2: undefined,
    field3: "ConardLi",
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
    let cloneobj = new obj.constructor();
    hash.set(obj, cloneobj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneobj[key] = deepCopy2(obj[key], hash);
        }
    }
    return cloneobj;
}
//version 2 解决了对象的属性中直接的引用了自身的问题，也就是循环引用的问题
