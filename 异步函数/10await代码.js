function requestData(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("setTimeout");
            resolve(value);
        }, 1000);
    }
    );
}


async function getData() {
    console.log("getData start");
    const res = await requestData("hello");//await后面的代码时不会执行的除非promise有结果
    console.log(res);
    console.log("getData end");
}
getData();
console.log("script end");//所以script end会先执行