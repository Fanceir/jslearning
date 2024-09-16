const obj = {
    name: "hello",
    friend: {
        name: "world",
        // saying: {
        //     what: "wow",
        //     function() {
        //         console.log("running");
        //     },
        // },
    },
};
obj.friend?.saying?.function();
//running
console.log(obj.friend?.saying?.what);
//可选链的使用
//这里使用了可选链，如果friend不存在，那么friend.saying也不会执行
