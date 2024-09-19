const promise = new Promise((resolve, reject) => {
    console.log("465465");
    //这里以上都是待定状态
    resolve();
    //这里以上都是成功状态
    reject();
    //这里是拒绝状态
});
promise
    .then((value) => {
        console.log("成功有了结果: ");
    })
    .catch((err) => {
        console.log("失败有了结果: ");
    });

//executor是创建promise时传入的一个函数，这个函数会立即执行
const promise2 = new Promise((resolve, reject) => {});
