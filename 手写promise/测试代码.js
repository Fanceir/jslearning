//! 因为promise中的reject和resolve能够传递一个参数
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
}
// 测试代码
let promise = new Promise((resolve, reject) => {
  resolve("这次一定");
});

promise.then(
  (result) => {
    console.log(result);
  },
  (reason) => {
    console.log(reason.message);
  }
);
