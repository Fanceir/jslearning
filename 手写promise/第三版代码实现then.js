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
    executor(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(result) {
    if (this.state === myPromise.PENDING) {
      this.state = myPromise.FULFILLED;
      this.PromiseResult = result;
    }
  }
  reject(reason) {
    if ((this.state = myPromise.PENDING)) {
      this.state = myPromise.REJECTED;
      this.PromiseReason = reason;
    }
  }
  //then传入两个参数，一个是onFulfilled 表示成功的时候
  //一个是onRejected表示失败的时候
  //Promise只以第一次为准所以使用了
  then(onFulfilled, onRejected) {
    if (this.state === myPromise.FULFILLED) {
      onFulfilled(this.PromiseResult);
    }
    if (this.state === myPromise.REJECTED) {
      onRejected(this.PromiseResult);
    }
  }
}
let promise1 = new myPromise((resolve, reject) => {
  resolve("这次一定");
  //   reject("下次一定");
});
promise1.then(
  (result) => {
    console.log(result);
  },
  (reason) => {
    console.log(reason.message);
  }
);
