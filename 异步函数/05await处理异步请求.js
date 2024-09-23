function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
            // reject("error")
        }, 2000);
    })
}

async function getData() {
    const res1 = await requestData("Hello")
    console.log("res1:", res1)

    const res2 = await requestData(res1 + "World")
    console.log("res2:", res2)
}

getData().then(res => {
    console.log("res:", res)
}).catch(err => {
    console.log("err:", err)
})
