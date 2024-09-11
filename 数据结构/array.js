//Array
let arr = new Array();
//创建一个空数组
arr[0] = "haha";
//添加元素
arr.push("hehe");
//添加元素
arr.join();
//arr.join()方法将数组中的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
let arr1 = arr.join(); //haha,hehe
arr.pop();
//删除最后一个元素
arr.shift();
//删除第一个元素
arr.unshift("haha");
//添加第一个元素
arr.reverse();
//反转数组
arr.sort();
//排序
let arr2 = arr.concat(arr1);
console.log(arr2); //["hehe", "haha", "hehe"]

//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
//splice() 方法会改变原始数组。
//splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。

Array.from("haha"); //这个是将字符串转换为数组
