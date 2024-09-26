const ACCESS_TOKEN = "token";
console.log(localStorage.length);
localStorage.setItem(ACCESS_TOKEN, "hello");
console.log(localStorage.length);
console.log(localStorage.key[0]);
console.log(localStorage.key[1]);
localStorage.clear();