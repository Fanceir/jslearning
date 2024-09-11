let map = new Map();
map.set(firstname, "haha");
//set (key, value) 添加元素,key是键名，value是键值
//get (key) 获取元素get的是key
map.get(firstname); //haha
//如果key不存在，返回undefined
map.get(lastname) ? map.get(lastname) : map.set(lastname, "hehe");
//这里是如果没有这个lastname那么就设置一个lastname
//has (key) 是否存在
map.has(firstname); //true
//如果存在返回true，否则返回false
//delete (key) 删除元素
//clear () 清空元素
//size () 元素个数
//keys () 获取所有的key
map.keys(); //MapIterator {"firstname", "lastname"}

//values () 获取所有的value
map.values(); //MapIterator {"haha", "hehe"}
//这里的mapiterator是一个迭代器，可以用for of遍历
//entries () 获取所有的key-value
map.entries(); //MapIterator {"firstname", "haha"}, {"lastname", "hehe"}

//forEach () 遍历
