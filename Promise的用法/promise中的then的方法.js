const promise = new Promise((resolve, reject) => {
    resolve();
});

//then参数传递的方式

promise.then((res) => {
    console.log("成功有了结果");
});
promise.then((res) => {
    console.log("成功有了结果");
});
promise.then((res) => {
    console.log("成功有了结果");
});
promise.then((res) => {
    console.log("成功有了结果");
});
promise.then((res) => {
    console.log("成功有了结果");
});
promise.then((res) => {
    console.log("成功有了结果");
});
//会输出6次成功有了结果
// promise
//     .then((res) => {
//         console.log("成功有了结果");
//     })
//     .catch((err) => {
//         console.log("失败有了结果");
//     });
