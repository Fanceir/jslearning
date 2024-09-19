const promise = new Promise((resolve, reject) => {
    reject("失败");
});
promise
    .then((res) => console.log("成功有了结果"))
    .catch((err) => console.log("失败有了结果"));
promise.catch((err) => {
    console.log("失败有了错误: ", err);
});
