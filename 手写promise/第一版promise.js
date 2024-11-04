class myPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.state = PENDING;
    executor(this.resolve, this.reject);
  }
  resolve() {
    if (this.state === PENDING) {
      this.state = FULFILLED;
    }
  }
  reject() {
    if ((this.state = PENDING)) {
      this.state = REJECTED;
    }
  }
}
