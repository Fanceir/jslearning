function Student(name, age, sno) {
    this.name = name;
    this.age = age;
    this.sno = sno;
}

Student.prototype.study = function () {
    console.log(this.name + "在学习");
};

Student.prototype.eating = function () {
    console.log(this.name + "在吃饭");
};

function Teacher(name, age, tno) {
    this.name = name;
    this.age = age;
    this.tno = tno;
}

Teacher.prototype.teach = function () {
    console.log(this.name + "在教书");
};

//在这里我们发现有两个函数，这两个函数的原型对象都有相同的方法，这样就会造成代码冗余
//所以我们可以将这两个函数的原型对象的方法提取出来
