const names = ["abc", "cba", "nba"]
const nums = [100, 22, 66, 88, 55]
console.log(names[Symbol.iterator]());
function* createArrayIterator(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}
const iterator = createArrayIterator(names);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
function* createRangeGenerator(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}
const range = createRangeGenerator(1, 10);
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());