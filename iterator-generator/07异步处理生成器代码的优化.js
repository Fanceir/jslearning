function requestData(url, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url);
        }, 2000);
    })
}
function* getData2() {
    const res1 = yield requestData("hello");//then方法返回的promise对象
    console.log("第一次的结果", res1);
    const res2 = yield requestData(res1 + "world");
    console.log("第二次的结果", res2);
    const res3 = yield requestData(res2 + "yes");
    console.log(res3);
}
const generator = getData2();
generator.next().value.then(res1 => {
    generator.next(res1).value.then(res2 => {
        generator.next(res2).value.then(res3 => {
            generator.next(res3);
        })
    })
})
//这里想要再加一个请求，还需要再加一个then方法

//自动化执行生成器函数

function execGenFn(getFn) {
    const generator = getFn();

    function exec(res) {
        const result = generator.next(res);
        if (result.done) {
            return;
        }
        result.value.then(data => {
            exec(data);
        })
    }
    exec
}
//这里是一个自动化执行生成器函数的函数
execGenFn(getData2);
