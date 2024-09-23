async function foo() {

    console.log(".......1");
    //return 123;//只要return了，就会立即执行resolve方法
    //什么情况下异步函数的结果是rejected状态
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         //resolve(123);
    //         reject("error");
    //     }, 2000);
    // })

    "abc".filter()
    //产生了错误，这个错误不会被浏览器立刻处理
    //拿到异常让后对异常进行处理

    return 123;

}
//promise的三种状态
//pending状态 fulfilled状态 rejected状态
foo().then(res => {
    console.log("res", res);
}).catch(err => {
    console.log("err", err);
})//如果有这个catch方法那么就不会被浏览器捕获到