console.log("script start");
function foo() {
    console.log("foo function")
}

function bar() {
    console.log("bar function")
    foo()
}
bar();



setTimeout(() => {
    console.log("setTimeout1");
}, 0);
setTimeout(() => {
    console.log("setTimeout2");
}, 0);
//宏任务



console.log("1111");
new Promise((resolve) => {
    console.log("2222");
    console.log("------------1");
    console.log("------------2");
    resolve()
    console.log("------------3");

}).then(res => {
    console.log("then1");
})
//微任务
console.log("3333");

console.log("end");

//Promise是微任务，setTimeout是宏任务
/*
* 有两种任务队列，分别是微任务队列和宏任务队列
* 微任务队列：Promise
* 宏任务队列：setTimeout setinterval 
* 在执行一个宏任务之前都会先查看微任务队列中是否有任务，如果有则先执行微任务队列中的任务

*/