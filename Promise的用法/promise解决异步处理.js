function execCode(counter) {
    const promise = new Promise((resolve, reject) => {
        // 异步任务
        setTimeout(() => {
            if (counter > 0) {
                // counter可以计算的情况
                let total = 0;
                for (let i = 0; i < counter; i++) {
                    total += i;
                }
                // 成功的回调
                resolve(total);
            } else {
                // 失败情况, counter有问题
                // 失败的回调
                reject(`${counter}有问题`);
            }
        }, 1000);
    });

    return promise;
}

const promise = execCode(100);
promise.then((value) => {
    console.log("成功有了结果: ", value);
});
promise.catch((err) => {
    console.log("失败有了错误: ", err);
});

// const promise2 = execCode(-100);
// promise2.then((value) => {
//     console.log("成功:", value);
// });
// promise2.catch((err) => {
//     console.log("失败:", err);
// });

// 执行一次
execCode(255)
    .then((value) => {
        console.log("成功:", value);
    })
    .catch((err) => {
        console.log("失败:", err);
    });
execCode(288)
    .then((value) => {
        console.log("成功:", value);
    })
    .catch((err) => {
        console.log("失败:", err);
    });
