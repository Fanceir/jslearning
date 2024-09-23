// function foo() {
//     await setTimeout(() => {
//         console.log(".......1");
//     }, 2000);
// }
//普通的函数是不能使用await关键字的

function bar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 2000);
    })
}
async function foo() {
    const res = await bar();
    //后续有一个promise 等待这个promise对象的状态是fulfilled状态
    console.log("res", res);
}
foo();
//await通常用于等待一个promise对象