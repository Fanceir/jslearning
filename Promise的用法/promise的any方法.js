const p1 = new Promise((e, r) => {
        setTimeout(() => {
            e("p1 promise");
        }, 2000);
    }),
    p2 = new Promise((e, r) => {
        setTimeout(() => {
            e("p2 promise");
        }, 1000);
    }),
    p3 = new Promise((e, r) => {
        setTimeout(() => {
            e("p3 promise");
        }, 3000);
    });
Promise.any([p1, p2, p3])
    .then((e) => {
        console.log("any promise", e);
    })
    .catch((e) => {
        console.log("any promise", e);
    });
//any 找到第一个状态为fulfilled的promise，返回这个promise的值
//如果是rejected的话，会报错
