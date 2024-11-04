//then 是创建一个实例之后使用的所以不要创建在constructor里面
class myPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.state = myPromise.PENDING;
    //因为要考虑到这个结果参数所以取result
    this.PromiseResult = null;
    this.PromiseReason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(result) {
    if (this.state === myPromise.PENDING) {
      this.state = myPromise.FULFILLED;
      this.PromiseResult = result;
      this.onFulfilledCallbacks.forEach((callback) => {
        callback(result);
      });
    }
  }
  reject(reason) {
    if ((this.state = myPromise.PENDING)) {
      this.state = myPromise.REJECTED;
      this.PromiseReason = reason;
      this.onRejectedCallbacks.forEach((callback) => {
        callback(reason);
      });
    }
  }
  //then传入两个参数，一个是onFulfilled 表示成功的时候
  //一个是onRejected表示失败的时候
  //Promise只以第一次为准所以使用了
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onFulfilled =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    if (this.state === myPromise.PENDING) {
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          onFulfilled(this.PromiseResult);
        });
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          onRejected(this.PromiseReason);
        });
      });
    }
    if (this.state === myPromise.FULFILLED) {
      setTimeout(() => {
        onFulfilled(this.PromiseResult);
      });
    }
    if (this.state === myPromise.REJECTED) {
      setTimeout(() => {
        onRejected(this.PromiseResult);
      });
    }
  }
}

// 测试代码
console.log(1);
let promise1 = new myPromise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    console.log("A", promise1.state);
    resolve("这次一定");
    console.log("B", promise1.state);
    console.log(4);
  });
});
promise1.then(
  (result) => {
    console.log("C", promise1.state);
    console.log("fulfilled:", result);
  },
  (reason) => {
    console.log("rejected:", reason);
  }
);
console.log(3);
