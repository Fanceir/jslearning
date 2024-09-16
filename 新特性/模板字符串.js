const yourname = "小明";
const age = 18;
function foo(...args) {
    console.log(args);
}
foo`my name is ${yourname},age is ${age},I'm happy`;
//[ [ 'my name is ', ',age is ', ",I'm happy" ], '小明', 18 ]
//模板字符串会被分割成数组，第一个元素是字符串，后面的元素是模板字符串中的变量
