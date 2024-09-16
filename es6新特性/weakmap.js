//weekmap
//weekmap的key只能是对象

const wm1 = new WeakMap();
const key = { foo: 1 };
wm1.set(key, 2);
console.log(wm1.get(key)); //2

wm1.delete(key);
console.log(wm1.get(key)); //undefined
