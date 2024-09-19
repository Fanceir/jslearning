const promise = new Promise((resolve, reject) => {
    reject("失败");
});
promise
    .then((res) => {
        console.log("then:", res);
    })
    .catch((err) => {
        console.log("catch:", err);
    })
    .finally(() => {
        console.log("finally");
    });
//finally方法不管promise是成功还是失败都会执行

//如果没有finally方法如果我要在结束之后执行一些操作，就需要在then和catch中都写一遍
