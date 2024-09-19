const promise = new Promise((resolve, reject) => {
    resolve("aaa");
});

promise
    .then((res) => {
        console.log("then第一次回调:", res);
        throw new Error("第二个Promise的异常error")
        return "bbbbbb";
    })
    .then((res) => {
        console.log("then第二次回调:", res);
        throw new Error("第三个Promise的异常error");
    })
    .then((res) => {
        console.log("then第三次回调:", res);
    })
    .catch((err) => {
        console.log("catch回调被执行:", err);
    });
//return throw yield
