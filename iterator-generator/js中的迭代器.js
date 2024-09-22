const names = ['name', 'abc', "def"];
let index = 0;
const namesIterator = {
    next: function () {
        if (index < names.length) {
            return { done: false, value: names[index++] };
        }
        else
            return { done: true, value: undefined };
    }
}
console.log(namesIterator.next());
