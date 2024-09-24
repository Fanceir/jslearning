console.log("hello world");
let message = "aaaa";
message = "bbbb";
setTimeout(() => {
    console.log("0s后的输出");
}, 0);
console.log("hello world");
//如果遇到一个setTimeout
//会放到事件队列中，等待执行

//如果是0s也会放到事件队列中，等待执行
//所以会先输出后面的内容
