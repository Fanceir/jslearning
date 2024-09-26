let token = localStorage.getItem("token")
if (!token) {
    console.log("从服务器获取token")
    token = "coderwhytokeninfo"
    localStorage.setItem("token", token)
}

// 2.username/password的操作
let username = localStorage.getItem("username")
let password = localStorage.getItem("password")
if (!username || !password) {
    console.log("让用户输入账号和密码")
    username = "helloworld"
    password = "123456"
    // 将token/username/password保存到storage
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
}

// 3.后续的操作
console.log(token)
console.log(token.length)
console.log(token + " 哈哈哈")