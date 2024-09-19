const promise = new Promise((resolve, reject) => {
    // resolve(100);
    //传入普通值
    // resolve({
    //     name: "zhangsan",
    //     age: 18,
    // });
    // resolve([{ name: "zhangsan", age: 18 }]);
    //* resolve中套一个promise
    //*当前promise的状态会由内部逃入的promise的状态决定
    // resolve(
    //     new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // );

    //* 3 resolve thenable对象
    resolve({
        then(resolve, reject) {
            resolve(154);
        },
    });
});
promise.then((res) => {
    console.log("then中拿到结果", res);
});

//!总结
//如果传入一个普通值，那么promise的状态会变为成功状态，值就是这个普通值
//如果传入另外一个promise 那么这个新的promise会决定原来promise的状态
//如果传入一个对象，而且这个对象中有个then方法，那么这个对象就是thenable对象，promise会等待这个对象的状态改变
