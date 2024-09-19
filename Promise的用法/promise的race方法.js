const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1");
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2");
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise3");
    }, 3000);
});
Promise.race([p1, p2, p3])
    .then((res) => {
        console.log("Promise", res);
    })
    .catch((err) => {
        console.log("Promise", err);
    });
//无论是resolve还是reject，只要有一个promise状态发生改变，就会执行then或者catch
