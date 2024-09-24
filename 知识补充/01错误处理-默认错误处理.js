// function foo() {
//     "abc".filter()
//     //这是一个浏览器的严重错误

// }
// foo();
// console.log("script start");
//意味着后面的代码都不会执行了

function sum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw '参数必须是数字';
    }
    return num1 + num2;
}
sum("adad", 1);