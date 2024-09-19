const promise = new Promise((resolve, reject) => {
    resolve(100);
});
promise
    .then((res) => {
        console.log("then中拿到结果", res);
    })
    .catch((err) => {
        console.log("catch中拿到错误", err);
    });
//链式调用
promise
    .then((res) => {
        console.log("第一个then方法", res);
        return "nnnnnn";
        //相当于return new Promise((resolve,reject)=>{resolve("nnnnnn")})
    })
    .then((res) => {
        console.log("第二个then方法", res);
        return "dadasdasd";
    })
    .then((res) => {
        console.log("第三个then方法", res);
    })
    .catch((err) => {
        console.log("catch中拿到错误", err);
    });
//promise的then方法也是返回一个promise
// then方法时返回一个新的promise，这个promise的状态和值由then方法的回调函数的返回值决定
