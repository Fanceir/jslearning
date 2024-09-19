Promise.resolve("hello world");
//new Promise((resolve,reject)=>{resolve("hello world")})
const studentList = ["张三", "李四", "王五"];
Promise.resolve(studentList)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
Promise.reject("error");

// promise 的reject
// const promise1 = Promise.reject("error");
// promise1.catch((err) => {
//     console.log(err);
// });
