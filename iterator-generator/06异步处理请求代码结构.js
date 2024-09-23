function requestData(url, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url);
        }, 2000);
    })
}
//发送了一次网络请求
// requestData("http://hello").then(res => {
//     console.log("res:", res)
// })

/*
    发送第一次网络请求然后得到一个结果
    然后根据这个结果再发送第二次网络请求
    然后得到第二次网络请求的结果
    然后根据第二次的结果再发送第三次网络请求

*/
function getData() {
    requestData("hello").then(res1 => {
        console.log("第一次的结果", res1);
        requestData(res1 + "world").then(res2 => {
            console.log("第二次的结果", res2);
            requestData(res2 + "yes").then(res3 => {
                console.log("第三次的结果", res3);
            })
        })
    })
}
// getData();
//这就是层层嵌套
//会产生回调地狱
function getData1() {
    requestData("hello").then(res1 => {
        console.log("第一次的结果", res1);
        return requestData(res1 + "world")
    }).then(res2 => {
        console.log("第二次的结果", res2);
        return requestData(res2 + "yes")
    }).then(res3 => {
        console.log("第三次的结果", res3);
    })
}
// getData1();
//这就是promise链式调用
//每次then方法都会返回一个新的promise对象
//这样就可以一直调用then方法
// function* getData2() {
//     const res1 = yield requestData("hello");//then方法返回的promise对象
//     console.log("第一次的结果", res1);
//     const res2 = yield requestData(res1 + "world");
//     console.log("第二次的结果", res2);
//     const res3 = yield requestData(res2 + "yes");
//     console.log(res3);
// }
// const generator = getData2();
// generator.next().value.then(res1 => {
//     generator.next(res1).value.then(res2 => {
//         generator.next(res2).value.then(res3 => {
//             generator.next(res3);
//         })
//     })
// })

async function getData3() {
    const res1 = await requestData("hello");
    console.log("第一次的结果", res1);
    const res2 = await requestData(res1 + "world");
    console.log("第二次的结果", res2);
    const res3 = await requestData(res2 + "yes");
    console.log(res3);
}
const p = getData3();