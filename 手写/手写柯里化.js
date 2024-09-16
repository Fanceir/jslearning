// function curry(fn) {
//     const argLen = fn.length;
//     const presetArg = [].slice.call(arguments, 1);
//     return function () {
//         const restArgs = [].slice.call(arguments);
//         const allArgs = [...presetArg, ...restArgs];
//         if (allArgs.length >= argLen.length) {
//             return fn.apply(this, allArgs);
//         } else return curry.call(null, fn, ...allArgs);
//     };
// }

function curry_unlimited(fn) {
    const presetArg = [].slice.call(arguments, 1); // 初始预置参数
    function curried() {
        const restArgs = [].slice.call(arguments); // 每次调用时收集新参数
        const allArgs = [...presetArg, ...restArgs]; // 将所有参数累积
        return curry_unlimited.call(null, fn, ...allArgs); // 递归调用 curry_unlimited
    }
    // 重写 toString 方法，在隐式调用时执行
    curried.toString = function () {
        return fn.apply(null, presetArg); // 使用当前的 presetArg 执行 fn
    };
    return curried;
}

//测试
const curriedSum = curry_unlimited(sum);
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
// 测试不同的调用方式
console.log(curriedSum(1)(2)(3) + ""); // 输出 6
console.log(curriedSum(1, 2, 3)(4)(5) + ""); // 输出 15
