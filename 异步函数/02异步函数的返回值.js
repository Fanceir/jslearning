async function foo2() {
    //*1.返回一个普通的值
    //*2.返回一个promise对象
    //*3.返回一个被thenable对象

    //return 123
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(123);
    //     }, 2000);
    // })
    return {
        then: function (resolve, reject) {
            resolve(123);
        }
    }
}
foo2().then(res => {
    console.log("res", res);
})
//异步函数会返回一个promise对象
//异步函数的而返回值相当于呗包裹到promise.resolve()中

//如果返回一个promise对象，那么这个promise对象的状态和值会传递给外部的promise对象


//返回一个值
//返回一个promise对象
//返回一个thenable对象