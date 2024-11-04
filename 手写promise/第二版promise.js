//! 因为promise中的reject和resolve能够传递一个参数
class myPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.state = PENDING;
    //因为要考虑到这个结果参数所以取result
    this.PromiseResult = null;
    this.PromiseReason = null;
    executor(this.resolve, this.reject);
  }
  resolve(result) {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.PromiseResult = result;
    }
  }
  reject(reason) {
    if ((this.state = PENDING)) {
      this.state = REJECTED;
      this.PromiseReason = reason;
    }
  }
}
