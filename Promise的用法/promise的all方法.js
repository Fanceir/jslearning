const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 promise");
    }, 2000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 promise");
    }, 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 promise");
    }, 3000);
});
//创建一个新的promise
Promise.all([p1, p2, p3])
    .then((res) => {
        console.log("all promise", res);
    })
    //这里的res是一个数组类型
    .catch((err) => {
        console.log("all promise", err);
    });

// Promise.allSettled
Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log("allSettled promise", res);
});
// allSettled promise [
//     { status: 'fulfilled', value: 'p1 promise' },
//     { status: 'fulfilled', value: 'p2 promise' },
//     { status: 'fulfilled', value: 'p3 promise' }
//   ]