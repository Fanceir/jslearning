function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Student(name, age, grade) {
    // Person.call(this, name, age);
    Reflect.construct(Person, [name, age], Student);
    this.grade = grade;
}

const stu = new Student("张三", 18, 3);
console.log(stu.__proto__ === Student.prototype); //true
