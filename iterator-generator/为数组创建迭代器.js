const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
function createArrayIterator(arr) {
    let index = 0;
    return {
        next: function () {
            if (index < arr.length)
                return { done: false, value: arr[index++] };
            else
                return { done: true, value: undefined };
        }
    }
}
const arr1Iterator = createArrayIterator(arr1); 
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());
console.log(arr1Iterator.next());

const arr2Iterator = createArrayIterator(arr2);
console.log(arr2Iterator.next());
console.log(arr2Iterator.next());
console.log(arr2Iterator.next());
console.log(arr2Iterator.next());
console.log(arr2Iterator.next());
console.log(arr2Iterator.next());
console.log(arr2Iterator.next());
console.log(arr2Iterator.next());
console.log(arr2Iterator.next());
