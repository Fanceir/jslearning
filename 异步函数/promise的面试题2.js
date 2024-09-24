async function async1() {
  console.log('async1 start')
  await async2();
  console.log('async1 end')//因为async2返回的是一个Promise.resolve(undefined)，所以这里会等到处理微任务的时候才开始处理
  
}

async function async2() {
  console.log('async2')
  //相当于返回一个Promise.resolve(undefined)
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1();//直接开始执行

new Promise(function (resolve) {
  console.log('promise1')
  resolve();
}).then(function () {
  console.log('promise2')
})

console.log('script end')
/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/

//总结
//1.首先执行script start
//2.执行async1 start
//3.在async1中执行了async2，所以执行async2
//此时async2返回了一个Promise.resolve(undefined)
//4.执行promise1
//5.执行script end
//6.执行async1 end
//7.执行promise2
//8.执行setTimeout
