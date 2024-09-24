function test() {
    console.log("test")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("test")
        }, 2000);
    })
}
async function bar() {
    console.log("bar function ")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("bar")
        }, 3000);
    })
}

async function demo() {
    console.log("demo function")
    return {
        then: function (resolve) {
            resolve("demo")
        }
    }
}

//调用的入口的函数
async function foo() {
    const res1 = await test()
    console.log("res1:", res1)
    const res2 = await bar()
    console.log("res2:", res2)
    const res3 = await demo()
    console.log("res3:", res3)
    return "foo"
}
foo().then(res => {
    console.log("res:", res)
}).catch(err => {
    console.log("err:", err)
})
//可以跟一个异步函数