function exeCode(counter, successCallback, failureCallback) {
    setTimeout(() => {
        if (counter > 0) {
            let total = 0;
            for (let i = 0; i < 100; i++) {
                total += i;
            }
            //在某一个时刻回调函数
            successCallback(total);
        } else {
            failureCallback(`counter的值是${counter}有问题`);
        }
    }, 3000);
}
exeCode(
    -100,
    (value) => {
        console.log("外界接收到了回调函数", value);
    },
    (err) => {
        console.log("本次执行失败了", err);
    }
);
//这里是不会立马给你结果的
//但是如果突然出现了错误，那么就会立马给你结果
