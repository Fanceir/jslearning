class myArray extends Array {
    get lastItem() {
        return this[this.length - 1];
    }

    get firstItem() {
        return this[0];
    }
}

var arr = new myArray(10, 20, 30);
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr.lastItem);
console.log(arr.firstItem);

// 2.直接对Array进行扩展
Array.prototype.lastItem = function () {
    return this[this.length - 1];
};

var arr = new Array(10, 20, 30);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.lastItem());

class mySet extends Set {
    constructor() {
        super();
    }
    get lastItem() {
        return Array.from(this)[this.size - 1];
    }
}
var s = new mySet();
s.add(1);
s.add(2);
console.log(s);
console.log(s.lastItem);
