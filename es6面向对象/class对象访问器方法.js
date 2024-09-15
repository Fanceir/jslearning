var obj = {};
Object.defineProperty(obj, "name", {
    value: "小明",
    writable: false,
    configurable: true,
    enumerable: true,
    set: function () {
        console.log("set");
    },
    get: function () {
        console.log("get");
        return "小红";
    },
});

var obj = {
    _name: "小明",
    set name(val) {
        console.log("set");
        this._name = val;
    },
};
